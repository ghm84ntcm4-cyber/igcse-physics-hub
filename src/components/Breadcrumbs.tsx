import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home, BookOpen, FileText, Cpu, Calculator, HelpCircle, Layers, FlaskConical, User, Sparkles } from "lucide-react";
import { IGCSE_TOPICS } from "../data/physicsData";
import { MASTER_BOOKLET_DATA } from "../data/bookletData";

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  if (pathname === "/") {
    return null;
  }

  const pathParts = pathname.split("/").filter(Boolean);
  const rootSection = pathParts[0];
  const subSection = pathParts[1];

  interface BreadcrumbItem {
    label: string;
    path: string;
    icon?: React.ReactNode;
  }

  const items: BreadcrumbItem[] = [
    { label: "Home", path: "/", icon: <Home className="w-3.5 h-3.5 text-slate-500" /> },
  ];

  if (rootSection === "topics" || rootSection === "notes") {
    items.push({
      label: "Student Textbook",
      path: "/topics",
      icon: <BookOpen className="w-3.5 h-3.5 text-indigo-600" />,
    });

    if (subSection) {
      let foundSubTopic: { title: string; unitTitle: string } | null = null;
      for (const unit of IGCSE_TOPICS) {
        const sub = unit.subTopics.find((s) => s.id === subSection);
        if (sub) {
          foundSubTopic = { title: `${sub.id} ${sub.title}`, unitTitle: unit.title };
          break;
        }
      }

      if (foundSubTopic) {
        items.push({
          label: foundSubTopic.unitTitle,
          path: `/topics#${foundSubTopic.unitTitle}`,
        });
        items.push({
          label: foundSubTopic.title,
          path: `/topics/${subSection}`,
        });
      } else {
        items.push({
          label: `Topic ${subSection}`,
          path: `/topics/${subSection}`,
        });
      }
    }
  } else if (rootSection === "booklet") {
    items.push({
      label: "Master Revision Booklet",
      path: "/booklet",
      icon: <FileText className="w-3.5 h-3.5 text-blue-600" />,
    });

    if (subSection) {
      let foundChapterTitle = subSection;
      for (const unit of MASTER_BOOKLET_DATA) {
        const ch = unit.chapters.find((c) => c.id === subSection);
        if (ch) {
          foundChapterTitle = `${ch.chapterNumber} ${ch.titleEn}`;
          items.push({
            label: unit.blockTitleEn,
            path: `/booklet`,
          });
          break;
        }
      }
      items.push({
        label: foundChapterTitle,
        path: `/booklet/${subSection}`,
      });
    }
  } else if (rootSection === "simulators") {
    items.push({
      label: "Lab Simulators",
      path: "/simulators",
      icon: <Cpu className="w-3.5 h-3.5 text-cyan-600" />,
    });

    if (subSection) {
      const simNames: Record<string, string> = {
        motion: "Motion & Velocity Lab",
        hooke: "Hooke's Law & Elasticity",
        snell: "Ray Optics & Snell's Law",
        waves: "Ripple Tank Wave Simulator",
        circuits: "DC Circuits & Ohm's Law",
        density: "Density & Archimedes Buoyancy",
        thermal: "Calorimetry & Specific Heat",
        lens: "Convex / Concave Thin Lens",
        halflife: "Radioactive Decay & Half-Life",
      };
      items.push({
        label: simNames[subSection] || subSection,
        path: `/simulators/${subSection}`,
      });
    }
  } else if (rootSection === "formulas") {
    items.push({
      label: "Formula Sheet & Solver",
      path: "/formulas",
      icon: <Calculator className="w-3.5 h-3.5 text-amber-600" />,
    });

    if (subSection) {
      items.push({
        label: subSection.charAt(0).toUpperCase() + subSection.slice(1),
        path: `/formulas/${subSection}`,
      });
    }
  } else if (rootSection === "quiz") {
    items.push({
      label: "Past Paper Question Bank",
      path: "/quiz",
      icon: <HelpCircle className="w-3.5 h-3.5 text-purple-600" />,
    });
    if (subSection) {
      items.push({
        label: `Unit ${subSection}`,
        path: `/quiz/${subSection}`,
      });
    }
  } else if (rootSection === "flashcards") {
    items.push({
      label: "Active Recall Flashcards",
      path: "/flashcards",
      icon: <Layers className="w-3.5 h-3.5 text-emerald-600" />,
    });
  } else if (rootSection === "paper6") {
    items.push({
      label: "Paper 6 Practical Mastery",
      path: "/paper6",
      icon: <FlaskConical className="w-3.5 h-3.5 text-rose-600" />,
    });
  } else if (rootSection === "about") {
    items.push({
      label: "About Mr. Ahmed Badr",
      path: "/about",
      icon: <User className="w-3.5 h-3.5 text-blue-600" />,
    });
  } else if (rootSection === "worksheets" || rootSection === "worksheet-generator") {
    items.push({
      label: "Worksheet & PDF Generator",
      path: "/worksheets",
      icon: <FileText className="w-3.5 h-3.5 text-emerald-600" />,
    });
  } else if (rootSection === "classified" || rootSection === "classified-papers") {
    items.push({
      label: "Classified Past Papers",
      path: "/classified",
      icon: <FileText className="w-3.5 h-3.5 text-blue-600" />,
    });
  } else if (rootSection === "calculator" || rootSection === "grade-calculator") {
    items.push({
      label: "IGCSE Grade Calculator",
      path: "/calculator",
      icon: <Calculator className="w-3.5 h-3.5 text-amber-600" />,
    });
  } else if (rootSection === "videos") {
    items.push({
      label: "Video Lessons & Worked Solutions",
      path: "/videos",
      icon: <Sparkles className="w-3.5 h-3.5 text-rose-600" />,
    });
  } else if (rootSection === "pitfalls" || rootSection === "common-mistakes") {
    items.push({
      label: "Examiner Pitfalls & Traps",
      path: "/pitfalls",
      icon: <HelpCircle className="w-3.5 h-3.5 text-amber-600" />,
    });
  } else if (rootSection === "planner" || rootSection === "study-planner") {
    items.push({
      label: "Interactive Study Planner",
      path: "/planner",
      icon: <Sparkles className="w-3.5 h-3.5 text-indigo-600" />,
    });
  } else if (rootSection === "exam-boards" || rootSection === "comparison" || rootSection === "exam-board-comparison") {
    items.push({
      label: "Cambridge vs Edexcel Comparison",
      path: "/exam-boards",
      icon: <Layers className="w-3.5 h-3.5 text-emerald-600" />,
    });
  } else if (rootSection === "leaderboard" || rootSection === "rankings") {
    items.push({
      label: "Student Leaderboard",
      path: "/leaderboard",
      icon: <Sparkles className="w-3.5 h-3.5 text-amber-500" />,
    });
  } else if (rootSection === "progress" || rootSection === "my-progress") {
    items.push({
      label: "My Progress & Checklist",
      path: "/progress",
      icon: <BookOpen className="w-3.5 h-3.5 text-blue-600" />,
    });
  } else if (rootSection === "certificate" || rootSection === "certificates") {
    items.push({
      label: "Course Certificate",
      path: "/certificate",
      icon: <Sparkles className="w-3.5 h-3.5 text-amber-500" />,
    });
  } else if (rootSection === "directory") {
    items.push({
      label: "Curriculum Directory",
      path: "/directory",
      icon: <Layers className="w-3.5 h-3.5 text-slate-600" />,
    });
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-4 flex items-center flex-wrap gap-1.5 text-xs text-slate-500 bg-white/80 backdrop-blur-xs border border-slate-200/80 px-3.5 py-2 rounded-xl shadow-2xs"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={item.path + index}>
            {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
            {isLast ? (
              <span className="font-semibold text-slate-900 flex items-center gap-1.5 truncate max-w-[240px] sm:max-w-md">
                {item.icon}
                <span>{item.label}</span>
              </span>
            ) : (
              <Link
                to={item.path}
                className="hover:text-blue-600 font-medium transition-colors flex items-center gap-1.5 text-slate-600"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
