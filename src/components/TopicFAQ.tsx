import React, { useState } from "react";
import { FAQItem, TOPIC_FAQS } from "../data/topicQuizzesAndFaqs";
import { HelpCircle, Plus } from "lucide-react";

interface TopicFAQProps {
  topicId?: string;
  customFaqs?: FAQItem[];
  title?: string;
  subtitle?: string;
}

export const TopicFAQ: React.FC<TopicFAQProps> = ({
  topicId = "1.1",
  customFaqs,
  title = "❓ Frequently Asked Questions",
  subtitle = "Common questions students ask about this topic.",
}) => {
  const faqs: FAQItem[] = customFaqs || TOPIC_FAQS[topicId] || TOPIC_FAQS["1.1"];
  const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({});

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      id="topic-faq"
      className="max-w-2xl mx-auto my-10 px-4 sm:px-0 font-sans space-y-4"
    >
      <div>
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <span>{title}</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">{subtitle}</p>
      </div>

      <div id="faq-list" className="space-y-2.5">
        {faqs.map((item, index) => {
          const isOpen = !!openIndexes[index];

          return (
            <div
              key={index}
              className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/90 shadow-2xs transition-all"
            >
              <button
                type="button"
                onClick={() => toggleIndex(index)}
                className="w-full text-left p-4 sm:p-4.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 transition-colors"
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span
                  className={`text-blue-900 dark:text-blue-400 text-lg font-bold transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <Plus className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-4 sm:px-4.5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 animate-in fade-in duration-200">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
