import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IGCSE_TOPICS } from "../data/physicsData";
import {
  Activity,
  Flame,
  Waves,
  Zap,
  Radio,
  Sun,
  ChevronRight,
  BookOpen,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  Search,
} from "lucide-react";

export const TopicDirectory: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState("");

  const iconMap: Record<string, React.ReactNode> = {
    Activity: <Activity className="w-5 h-5 text-blue-600" />,
    Flame: <Flame className="w-5 h-5 text-amber-600" />,
    Waves: <Waves className="w-5 h-5 text-cyan-600" />,
    Zap: <Zap className="w-5 h-5 text-indigo-600" />,
    Radio: <Radio className="w-5 h-5 text-purple-600" />,
    Sun: <Sun className="w-5 h-5 text-orange-600" />,
  };

  const filteredTopics = IGCSE_TOPICS.map((unit) => {
    if (!filterQuery) return unit;
    const q = filterQuery.toLowerCase();
    const matchesUnit =
      unit.title.toLowerCase().includes(q) || unit.description.toLowerCase().includes(q);
    const matchingSubTopics = unit.subTopics.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        s.syllabusRef.toLowerCase().includes(q)
    );
    if (matchesUnit || matchingSubTopics.length > 0) {
      return {
        ...unit,
        subTopics: matchesUnit ? unit.subTopics : matchingSubTopics,
      };
    }
    return null;
  }).filter(Boolean) as typeof IGCSE_TOPICS;

  return (
    <section aria-label="Topic Directory" className="space-y-4">
      {/* Header and Live Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 mb-1">
            <BookOpen className="w-4 h-4" />
            <span>IGCSE & Edexcel Complete Curriculum</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Browse by Physics Topics & Chapters
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Select any sub-topic below to navigate to its dedicated textbook page, formulas, and worked solutions
          </p>
        </div>

        {/* Search/Filter Bar */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Search topic or chapter..."
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
      </div>

      {/* Grid of 6 Units */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTopics.map((unit) => (
          <div
            key={unit.id}
            className="bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all duration-200 p-5 flex flex-col justify-between"
          >
            <div>
              {/* Unit Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                    {iconMap[unit.iconName] || <Activity className="w-5 h-5 text-blue-600" />}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Unit {unit.unitNumber}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {unit.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                {unit.description}
              </p>

              {/* Subtopic Links */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Chapters in this unit:
                </span>
                {unit.subTopics.map((sub) => (
                  <Link
                    key={sub.id}
                    to={`/topics/${sub.id}`}
                    className="group flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-all text-xs text-slate-700 hover:text-blue-600"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-mono text-[11px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded shrink-0">
                        {sub.id}
                      </span>
                      <span className="truncate font-medium group-hover:underline">
                        {sub.title}
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-1" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick action bar */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <Link
                to={`/topics/${unit.subTopics[0]?.id || "1.1"}`}
                className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <span>Read Full Unit</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to={`/booklet`}
                className="text-[11px] text-slate-500 hover:text-slate-700 font-medium"
              >
                Summary Booklet →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
