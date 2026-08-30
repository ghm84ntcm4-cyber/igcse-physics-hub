import React, { useState } from "react";
import { IGCSE_FLASHCARDS } from "../data/flashcardData";
import { Flashcard } from "../types";
import {
  Layers,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle,
  XCircle,
  HelpCircle,
  Shuffle,
} from "lucide-react";

export const FlashcardReview: React.FC = () => {
  const [cards, setCards] = useState<Flashcard[]>(IGCSE_FLASHCARDS);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [masteredCards, setMasteredCards] = useState<Record<string, boolean>>({});
  const [showHint, setShowHint] = useState<boolean>(false);

  const filteredCards = cards.filter((c) => {
    const topicMatch = selectedTopic === "all" || c.topicId === selectedTopic;
    const catMatch = selectedCategory === "all" || c.category === selectedCategory;
    return topicMatch && catMatch;
  });

  const currentCard = filteredCards[currentIndex] || filteredCards[0];

  const handleNext = () => {
    setIsFlipped(false);
    setShowHint(false);
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setShowHint(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(filteredCards.length - 1);
    }
  };

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowHint(false);
  };

  const handleToggleMastery = (cardId: string) => {
    setMasteredCards((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const masteredCount = Object.values(masteredCards).filter(Boolean).length;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
                <Layers className="w-5 h-5" />
              </span>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                Ahmed Badr's Active Recall Flashcards
              </h1>
            </div>
            <p className="text-sm text-slate-600 mt-1">
              Master core definitions, physical laws, formulas, and Paper 6 laboratory techniques through active recall.
            </p>
          </div>

          {/* Shuffle button */}
          <button
            onClick={handleShuffle}
            className="py-2 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 border border-slate-200 transition-colors self-start md:self-auto cursor-pointer"
          >
            <Shuffle className="w-4 h-4" />
            <span>Shuffle Cards</span>
          </button>
        </div>

        {/* Filters and Progress Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
          <div>
            <label className="text-[11px] font-semibold text-slate-500 block mb-1">Unit Filter</label>
            <select
              value={selectedTopic}
              onChange={(e) => {
                setSelectedTopic(e.target.value);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium"
            >
              <option value="all">All Units (1-6)</option>
              <option value="unit-1">Unit 1: Motion, Forces & Energy</option>
              <option value="unit-2">Unit 2: Thermal Physics</option>
              <option value="unit-3">Unit 3: Waves & Optics</option>
              <option value="unit-4">Unit 4: Electricity & Magnetism</option>
              <option value="unit-5">Unit 5: Nuclear Physics</option>
              <option value="unit-6">Unit 6: Space Physics</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-500 block mb-1">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium"
            >
              <option value="all">All Categories</option>
              <option value="Definition">Definitions</option>
              <option value="Law">Laws & Principles</option>
              <option value="Formula">Formulas & Trends</option>
              <option value="Experiment / Paper 6">Paper 6 Experimental Precautions</option>
            </select>
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-1 font-medium">
          <span>Card {currentIndex + 1} of {filteredCards.length}</span>
          <span className="font-bold text-emerald-600">
            {masteredCount} cards mastered
          </span>
        </div>
      </div>

      {/* Main 3D Flip Card */}
      {currentCard ? (
        <div className="space-y-4">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[300px] sm:min-h-[340px] rounded-3xl bg-white border-2 border-slate-200 hover:border-blue-500 p-8 flex flex-col justify-between cursor-pointer transition-all shadow-sm relative select-none"
          >
            {/* Top Bar of Flashcard */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold uppercase tracking-wider">
                {currentCard.category}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                <RotateCw className="w-3.5 h-3.5 text-slate-400" />
                Click anywhere to flip
              </span>
            </div>

            {/* Middle Content */}
            <div className="my-auto text-center py-6">
              {!isFlipped ? (
                <div className="space-y-4">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">
                    QUESTION / PROMPT
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    {currentCard.front}
                  </h2>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block">
                    OFFICIAL MARK SCHEME ANSWER
                  </span>
                  <p className="text-base sm:text-lg text-emerald-950 font-medium whitespace-pre-line leading-relaxed">
                    {currentCard.back}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
              <div>
                {currentCard.hint && !isFlipped && (
                  <div>
                    {showHint ? (
                      <span className="text-amber-700 font-semibold bg-amber-50 px-2 py-1 rounded-md border border-amber-200">
                        💡 Hint: {currentCard.hint}
                      </span>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowHint(true);
                        }}
                        className="text-amber-700 hover:underline flex items-center gap-1 font-semibold"
                      >
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Show Hint</span>
                      </button>
                    )}
                  </div>
                )}
              </div>

              <span className="font-mono text-slate-400 text-[11px]">
                {isFlipped ? "Flip back to prompt" : "Reveal answer"}
              </span>
            </div>
          </div>

          {/* Navigation and Mastery Buttons */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrev}
              className="py-3 px-5 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={() => handleToggleMastery(currentCard.id)}
              className={`py-3 px-6 rounded-2xl border text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                masteredCards[currentCard.id]
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                  : "bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 shadow-2xs"
              }`}
            >
              <CheckCircle className="w-4 h-4" />
              <span>{masteredCards[currentCard.id] ? "Mastered!" : "Mark as Mastered"}</span>
            </button>

            <button
              onClick={handleNext}
              className="py-3 px-5 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-2xs cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-slate-500">
          No flashcards match the selected filters.
        </div>
      )}
    </div>
  );
};
