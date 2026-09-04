import express from "express";
import path from "path";
import fs from "fs";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "5mb" }));

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Lazy initialize Gemini API client with telemetry
  const getGeminiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return null;
    }
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  };

  // AI Tutor & Problem Solver endpoint
  app.post("/api/gemini/tutor", async (req, res) => {
    try {
      const { prompt, mode, topic, subtopic, contextData } = req.body;

      if (!prompt || typeof prompt !== "string") {
        return res.status(400).json({ error: "Missing or invalid prompt parameter." });
      }

      const ai = getGeminiClient();
      if (!ai) {
        return res.status(503).json({
          error: "GEMINI_API_KEY is not configured in the environment.",
          isFallback: true,
        });
      }

      let systemInstruction = `You are an expert, friendly, and top-tier IGCSE Physics tutor specializing in Cambridge (CIE 0625/0972) and Edexcel (4PH1) International GCSE Physics curriculums.
Your goal is to help students achieve Grade 9 (A*) by teaching with crystal clarity, precision, correct scientific terminology, and exact mark scheme standards.

Key formatting rules:
1. Always state SI units clearly (e.g. m/s², N/m, J, W, Pa, Ω, Bq, etc.).
2. When solving numerical problems, follow the gold-standard 5-step method:
   - Step 1: Identify Given quantities & Convert units if needed (e.g. cm to m, mins to seconds)
   - Step 2: State the Formula (e.g. W = m * g or V = I * R)
   - Step 3: Rearrange if necessary (showing algebraic transposition)
   - Step 4: Substitute values into the formula
   - Step 5: Final Answer with correct Significant Figures (usually 2 or 3 s.f.) and SI unit!
3. When explaining theory, highlight MUST-HAVE Examiner Keywords (e.g., "rate of change of...", "directly proportional", "perpendicular", "total internal reflection occurs when angle of incidence > critical angle").
4. Warn about common student pitfalls and trap answers.
5. Use clean Markdown with bullet points, bold keywords, and clear line breaks. Keep explanations concise, lively, and encouraging.`;

      if (mode === "paper6") {
        systemInstruction += `\nFocus specifically on Paper 6 (Alternative to Practical):
- Precision of measuring instruments (ruler: ±1mm, vernier caliper: ±0.1mm, micrometer: ±0.01mm, measuring cylinder: to nearest graduation, balance: ±0.1g or 0.01g).
- Sources of experimental error (parallax error, heat loss to surroundings, zero error).
- Standard improvements to experiments (repeating and finding average, insulation/lid for calorimeter, stirring liquids for uniform temp, clamping ruler vertically).
- Graph plotting conventions: axes labeled with Quantity / Unit, scales covering >50% of grid, smooth best-fit line (equal points above and below), triangle for gradient covering >50% of line.`;
      } else if (mode === "quiz_generator") {
        systemInstruction += `\nCreate 1-2 realistic exam questions (with mark allocations [1], [2], or [3] marks) followed by a clear, complete mark scheme answer breakdown so the student can test themselves.`;
      }

      const userMessage = `Topic: ${topic || "IGCSE Physics"} ${subtopic ? `> ${subtopic}` : ""}
${contextData ? `Context: ${contextData}\n` : ""}
Student Question / Request:
${prompt}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: userMessage,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const text = response.text || "No response generated.";
      return res.json({ response: text });
    } catch (error: any) {
      console.error("Gemini Tutor Error:", error);
      return res.status(500).json({
        error: error.message || "Failed to generate tutor response.",
      });
    }
  });

  // Explicit static file handlers for Search Engine bots & verification
  app.get("/sitemap.xml", (req, res) => {
    const sitemapPaths = [
      path.join(process.cwd(), "public", "sitemap.xml"),
      path.join(process.cwd(), "dist", "sitemap.xml"),
    ];
    for (const p of sitemapPaths) {
      if (fs.existsSync(p)) {
        res.setHeader("Content-Type", "application/xml; charset=utf-8");
        return res.send(fs.readFileSync(p, "utf-8"));
      }
    }
    // Fallback inline XML
    const fallbackXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/</loc><priority>1.0</priority></url>
  <url><loc>https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/topics</loc><priority>0.9</priority></url>
  <url><loc>https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/booklet</loc><priority>0.9</priority></url>
  <url><loc>https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/worksheets</loc><priority>0.9</priority></url>
  <url><loc>https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/simulators</loc><priority>0.8</priority></url>
  <url><loc>https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/formulas</loc><priority>0.8</priority></url>
  <url><loc>https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/quiz</loc><priority>0.8</priority></url>
  <url><loc>https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/flashcards</loc><priority>0.8</priority></url>
  <url><loc>https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/paper6</loc><priority>0.8</priority></url>
  <url><loc>https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/about</loc><priority>0.7</priority></url>
</urlset>`;
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    return res.send(fallbackXml);
  });

  app.get("/sitemap.txt", (req, res) => {
    const sitemapTxtPaths = [
      path.join(process.cwd(), "public", "sitemap.txt"),
      path.join(process.cwd(), "dist", "sitemap.txt"),
    ];
    for (const p of sitemapTxtPaths) {
      if (fs.existsSync(p)) {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        return res.send(fs.readFileSync(p, "utf-8"));
      }
    }
    const fallbackTxt = `https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/
https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/topics
https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/booklet
https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/worksheets
https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/simulators
https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/formulas
https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/quiz
https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/flashcards
https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/paper6
https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/about`;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    return res.send(fallbackTxt);
  });

  app.get("/robots.txt", (req, res) => {
    const robotsPath = process.env.NODE_ENV !== "production"
      ? path.join(process.cwd(), "public", "robots.txt")
      : path.join(process.cwd(), "dist", "robots.txt");
    res.header("Content-Type", "text/plain; charset=utf-8");
    if (fs.existsSync(robotsPath)) {
      return res.send(fs.readFileSync(robotsPath, "utf-8"));
    }
    return res.send("User-agent: *\nAllow: /\nSitemap: https://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/sitemap.xml\n");
  });

  app.get("/google605381a1b3ea35f4.html", (req, res) => {
    res.header("Content-Type", "text/html; charset=utf-8");
    res.send("google-site-verification: google605381a1b3ea35f4.html");
  });

  // Vite middleware in dev or static files in prod
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`IGCSE Physics App server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
