import React from "react";
import { IGCSE_TOPICS } from "../data/physicsData";
import { X, Bookmark, ArrowRight, Trash2 } from "lucide-react";

interface BookmarksModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarks: string[];
  onSelectSubTopic: (topicId: string, subTopicId: string) => void;
  onRemoveBookmark: (subTopicId: string) => void;
}

export const BookmarksModal: React.FC<BookmarksModalProps> = ({
  isOpen,
  onClose,
  bookmarks,
  onSelectSubTopic,
  onRemoveBookmark,
}) => {
  if (!isOpen) return null;

  // Find all subtopics corresponding to bookmarks
  const savedItems: { topicId: string; topicTitle: string; subTopicId: string; subTopicTitle: string }[] = [];

  IGCSE_TOPICS.forEach((topic) => {
    topic.subTopics.forEach((st) => {
      if (bookmarks.includes(st.id)) {
        savedItems.push({
          topicId: topic.id,
          topicTitle: topic.title,
          subTopicId: st.id,
          subTopicTitle: st.title,
        });
      }
    });
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 bg-white border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Bookmark className="w-5 h-5 text-amber-500 fill-amber-500" />
            <h2 className="text-base font-bold text-slate-900">Saved Revision Sections</h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono font-bold">
              {savedItems.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 max-h-[60vh] overflow-y-auto space-y-2.5">
          {savedItems.length > 0 ? (
            savedItems.map((item) => (
              <div
                key={item.subTopicId}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 flex items-center justify-between gap-3 group transition-all"
              >
                <div
                  onClick={() => {
                    onSelectSubTopic(item.topicId, item.subTopicId);
                    onClose();
                  }}
                  className="flex-1 cursor-pointer"
                >
                  <span className="text-[10px] text-blue-700 font-mono font-bold block mb-0.5">
                    {item.topicTitle} (Section {item.subTopicId})
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.subTopicTitle}
                  </h4>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onRemoveBookmark(item.subTopicId)}
                    className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      onSelectSubTopic(item.topicId, item.subTopicId);
                      onClose();
                    }}
                    className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 space-y-2">
              <Bookmark className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="text-sm text-slate-700 font-bold">No saved sections yet</p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Click the bookmark icon on any revision note or subtopic to save it here for fast access.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
