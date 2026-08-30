import React, { useState } from "react";
import { QuizQuestion, TOPIC_QUIZZES } from "../data/topicQuizzesAndFaqs";
import { CheckCircle2, XCircle, RotateCcw, ArrowRight, BrainCircuit, Trophy, Sparkles } from "lucide-react";
import { ABLeaderboard } from "../utils/leaderboardStore";

interface QuickQuizProps {
  topicId?: string;
  topicTitle?: string;
  customQuestions?: QuizQuestion[];
  title?: string;
  subtitle?: string;
}

export const QuickQuiz: React.FC<QuickQuizProps> = ({
  topicId = "1.1",
  topicTitle = "Motion & Speed",
  customQuestions,
  title = "🧠 Quick Check",
  subtitle = "Test your understanding before moving on.",
}) => {
  const questions: QuizQuestion[] =
    customQuestions || TOPIC_QUIZZES[topicId] || TOPIC_QUIZZES["1.1"];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [pointsAwarded, setPointsAwarded] = useState<boolean>(false);

  const isCompleted = currentIndex >= questions.length;
  const currentQuestion = questions[currentIndex];

  const handleSelectAnswer = (index: number) => {
    if (isAnswered) return;
    setIsAnswered(true);
    setSelectedAnswerIndex(index);

    if (index === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setIsAnswered(false);
    setSelectedAnswerIndex(null);
    const nextIdx = currentIndex + 1;
    setCurrentIndex(nextIdx);

    // If finished, call ABLeaderboard.addScore
    if (nextIdx >= questions.length && !pointsAwarded) {
      const finalScore = score + (selectedAnswerIndex === currentQuestion.correctIndex ? 0 : 0);
      if (finalScore > 0) {
        ABLeaderboard.addScore(finalScore, `Quiz: Topic ${topicId}`);
        setPointsAwarded(true);
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setIsAnswered(false);
    setSelectedAnswerIndex(null);
    setPointsAwarded(false);
  };

  const progressPercent = Math.round((currentIndex / questions.length) * 100);
  const finalPercent = Math.round((score / questions.length) * 100);

  return (
    <div
      id="quick-quiz"
      className="max-w-2xl mx-auto my-10 p-6 sm:p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl font-sans shadow-xs space-y-5"
    >
      {/* Header */}
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <BrainCircuit className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>{title}</span>
          </h3>
          <span className="text-xs font-bold text-slate-500 bg-white dark:bg-slate-800 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700">
            {isCompleted ? "Completed" : `Question ${currentIndex + 1} of ${questions.length}`}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">{subtitle}</p>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          id="quiz-progress-fill"
          style={{ width: isCompleted ? "100%" : `${progressPercent}%` }}
          className="h-full bg-amber-500 rounded-full transition-all duration-300 ease-out"
        />
      </div>

      {/* Active Question Area */}
      {!isCompleted && currentQuestion && (
        <div id="quiz-question-area" className="space-y-4 pt-1">
          <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
            {currentQuestion.question}
          </div>

          {/* Options Container */}
          <div id="options-container" className="space-y-2.5">
            {currentQuestion.options.map((opt, i) => {
              const isCorrect = i === currentQuestion.correctIndex;
              const isSelected = i === selectedAnswerIndex;

              let btnStyle =
                "bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-300 dark:hover:border-blue-600";

              if (isAnswered) {
                if (isCorrect) {
                  btnStyle =
                    "bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-900 dark:text-emerald-300 font-bold";
                } else if (isSelected) {
                  btnStyle =
                    "bg-rose-50 dark:bg-rose-950/50 border-rose-500 text-rose-900 dark:text-rose-300";
                } else {
                  btnStyle = "opacity-50 bg-slate-100 dark:bg-slate-800/40 border-slate-200";
                }
              }

              return (
                <button
                  key={i}
                  disabled={isAnswered}
                  onClick={() => handleSelectAnswer(i)}
                  className={`w-full text-left px-4 py-3 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
                >
                  <span>{opt}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {isAnswered && (
            <div
              id="explanation-box"
              className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed border animate-in fade-in duration-200 ${
                selectedAnswerIndex === currentQuestion.correctIndex
                  ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200"
                  : "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800 text-slate-800 dark:text-slate-200"
              }`}
            >
              <strong className="block mb-1 font-bold">
                {selectedAnswerIndex === currentQuestion.correctIndex
                  ? "✅ Correct!"
                  : "❌ Not quite."}
              </strong>
              <span>{currentQuestion.explanation}</span>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="pt-2">
              <button
                id="next-btn"
                onClick={handleNext}
                className="px-6 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-full shadow-xs transition-all flex items-center gap-2 cursor-pointer ml-auto"
              >
                <span>{currentIndex + 1 === questions.length ? "Finish & Claim Points" : "Next Question"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Quiz Result Area */}
      {isCompleted && (
        <div id="quiz-result-area" className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
          <div id="quiz-result-emoji" className="text-4xl sm:text-5xl">
            {finalPercent >= 80 ? "🎉" : finalPercent >= 50 ? "👍" : "💪"}
          </div>
          <div id="quiz-result-text" className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-100">
            You scored {score}/{questions.length} ({finalPercent}%)
          </div>

          {score > 0 && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-300 text-xs sm:text-sm font-bold shadow-xs">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>+{score} Points Added to your Leaderboard Rank!</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            </div>
          )}

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
            {finalPercent === 100
              ? "Mastery achieved! You are ready to move on to the next chapter."
              : "Review the formulas and explanations above before tackling past paper questions."}
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={handleRestart}
              className="px-6 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-full shadow-xs transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Try Again</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
