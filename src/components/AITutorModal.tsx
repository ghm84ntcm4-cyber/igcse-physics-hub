import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  X,
  Send,
  Loader2,
  HelpCircle,
  BookOpen,
  Bot,
  User,
  RotateCcw,
  Zap,
} from "lucide-react";

interface AITutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopicContext?: string;
  initialSubTopicContext?: string;
}

interface ChatMessage {
  role: "user" | "model";
  text: string;
}

export const AITutorModal: React.FC<AITutorModalProps> = ({
  isOpen,
  onClose,
  initialTopicContext,
  initialSubTopicContext,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      text: "Hello! I'm Ahmed Badr's IGCSE Physics AI Tutor. I can help you solve calculation problems step-by-step, explain tricky concepts (like TIR or electromagnetic induction), decode mark schemes, or review Paper 6 practical techniques. What would you like help with?",
    },
  ]);
  const [inputPrompt, setInputPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // If initial context passed, give suggestion prompt
  useEffect(() => {
    if (initialTopicContext && initialSubTopicContext) {
      setInputPrompt(
        `Can you explain the key concepts, formulas, and common exam traps for "${initialSubTopicContext}" (${initialTopicContext})?`
      );
    }
  }, [initialTopicContext, initialSubTopicContext]);

  if (!isOpen) return null;

  const handleSend = async (customText?: string) => {
    const textToSend = customText || inputPrompt;
    if (!textToSend.trim() || isLoading) return;

    const newHistory: ChatMessage[] = [...messages, { role: "user", text: textToSend }];
    setMessages(newHistory);
    setInputPrompt("");
    setIsLoading(true);

    try {
      // Send history and current topic context to /api/gemini/tutor
      const response = await fetch("/api/gemini/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: textToSend,
          topicContext: initialTopicContext ? `${initialTopicContext} - ${initialSubTopicContext}` : undefined,
          history: newHistory.slice(0, -1),
        }),
      });

      const data = await response.json();
      if (response.ok && data.reply) {
        setMessages([...newHistory, { role: "model", text: data.reply }]);
      } else {
        setMessages([
          ...newHistory,
          {
            role: "model",
            text: data.error || "Sorry, I encountered an error connecting to the AI Tutor service. Please ensure your GEMINI_API_KEY is configured.",
          },
        ]);
      }
    } catch (err: any) {
      setMessages([
        ...newHistory,
        {
          role: "model",
          text: "Network error communicating with AI Tutor server. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePresetPrompt = (prompt: string) => {
    handleSend(prompt);
  };

  const handleResetChat = () => {
    setMessages([
      {
        role: "model",
        text: "Chat cleared. What physics topic or question would you like to review next?",
      },
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-3xl h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-white border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-xs">
              <Sparkles className="w-5 h-5 text-yellow-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-slate-900">Ahmed Badr's Physics AI Tutor</h2>
                <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-200">
                  Cambridge 0625 / 0972
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Step-by-step problem solver & syllabus guide
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetChat}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
              title="Clear Chat"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Chat Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/50">
          {messages.map((m, idx) => {
            const isUser = m.role === "user";
            return (
              <div
                key={idx}
                className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 border border-blue-200 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`p-4 rounded-2xl max-w-[85%] text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                    isUser
                      ? "bg-blue-600 text-white rounded-tr-none font-medium shadow-xs"
                      : "bg-white text-slate-800 border border-slate-200/90 rounded-tl-none shadow-2xs"
                  }`}
                >
                  {m.text}
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-xl bg-slate-200 text-slate-700 border border-slate-300 flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 justify-start items-center text-xs text-blue-600 animate-pulse pl-11 font-medium">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Thinking & formulating mark-scheme explanation...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Prompts */}
        <div className="px-4 py-2.5 bg-white border-t border-slate-200 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider shrink-0">
            Quick Prompts:
          </span>
          <button
            onClick={() => handlePresetPrompt("How do I score full 5 marks on Paper 6 graph plotting questions?")}
            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium whitespace-nowrap border border-slate-200 transition-colors"
          >
            📊 Paper 6 Graph Rules
          </button>
          <button
            onClick={() => handlePresetPrompt("Explain Total Internal Reflection (TIR) and the critical angle formula with an example.")}
            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium whitespace-nowrap border border-slate-200 transition-colors"
          >
            💎 Explain TIR & Critical Angle
          </button>
          <button
            onClick={() => handlePresetPrompt("Give me a challenging calculation question on half-life with background radiation and guide me step-by-step.")}
            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium whitespace-nowrap border border-slate-200 transition-colors"
          >
            ☢️ Half-Life Problem Practice
          </button>
          <button
            onClick={() => handlePresetPrompt("Explain the difference between alternating current (AC) and direct current (DC) in transformers.")}
            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium whitespace-nowrap border border-slate-200 transition-colors"
          >
            ⚡ AC vs DC in Transformers
          </button>
        </div>

        {/* Chat Input Bar */}
        <div className="p-4 bg-white border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              placeholder="Ask anything (e.g. 'Solve this: A 2kW kettle takes 2 mins to boil water...')"
              className="flex-1 bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white placeholder-slate-400"
            />
            <button
              type="submit"
              disabled={isLoading || !inputPrompt.trim()}
              className="p-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white shadow-xs transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
