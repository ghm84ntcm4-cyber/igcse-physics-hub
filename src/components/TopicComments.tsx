import React, { useState, useEffect } from "react";
import { MessageSquare, Send, ThumbsUp, CheckCircle, User, MessageCircle, HelpCircle, Sparkles, AlertCircle } from "lucide-react";

export interface CommentItem {
  id: string;
  author: string;
  avatar?: string;
  role: "student" | "teacher";
  date: string;
  content: string;
  likes: number;
  replies?: CommentItem[];
}

interface TopicCommentsProps {
  topicId?: string;
  topicTitle?: string;
}

const DEFAULT_COMMENTS: Record<string, CommentItem[]> = {
  "1.1": [
    {
      id: "c-1",
      author: "Kareem T.",
      avatar: "👨‍🎓",
      role: "student",
      date: "2 days ago",
      content: "When calculating acceleration, if the speed decreases from 20 m/s to 5 m/s in 3 seconds, should I write a = -5 m/s² or state 'deceleration of 5 m/s²' in Paper 4?",
      likes: 8,
      replies: [
        {
          id: "c-1-r1",
          author: "Mr. Ahmed Badr",
          avatar: "👨‍🏫",
          role: "teacher",
          date: "1 day ago",
          content: "Great question Kareem! In Cambridge mark schemes: if you write 'acceleration = -5 m/s²', the negative sign is compulsory. If the question specifically asks for 'deceleration', write '5 m/s²' (positive). Never write 'deceleration = -5 m/s²' as this is a double negative!",
          likes: 14,
        },
      ],
    },
    {
      id: "c-2",
      author: "Mariam S.",
      avatar: "👩‍🔬",
      role: "student",
      date: "3 days ago",
      content: "Is circular motion tested as accelerated motion in Paper 2 multiple choice? I always get confused because the speed is constant.",
      likes: 6,
      replies: [
        {
          id: "c-2-r1",
          author: "Mr. Ahmed Badr",
          avatar: "👨‍🏫",
          role: "teacher",
          date: "2 days ago",
          content: "Yes, exactly! Velocity is a vector (magnitude + direction). Since direction continuously changes in a circle, velocity changes. Rate of change of velocity is acceleration, so circular motion is ALWAYS accelerated towards the centre.",
          likes: 11,
        },
      ],
    },
  ],
};

export const TopicComments: React.FC<TopicCommentsProps> = ({
  topicId = "1.1",
  topicTitle = "This Topic",
}) => {
  const storageKey = `abphysics_comments_${topicId}`;

  const [comments, setComments] = useState<CommentItem[]>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_COMMENTS[topicId] || DEFAULT_COMMENTS["1.1"] || [];
  });

  const [authorName, setAuthorName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [replyingToId, setReplyingToId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setComments(JSON.parse(saved));
      } else {
        setComments(DEFAULT_COMMENTS[topicId] || DEFAULT_COMMENTS["1.1"] || []);
      }
    } catch (e) {
      console.error(e);
    }
  }, [topicId, storageKey]);

  const saveToStorage = (items: CommentItem[]) => {
    setComments(items);
    try {
      localStorage.setItem(storageKey, JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment: CommentItem = {
      id: "comm-" + Date.now(),
      author: authorName.trim() || "IGCSE Physics Student",
      avatar: "🎓",
      role: "student",
      date: "Just now",
      content: commentText.trim(),
      likes: 0,
      replies: [],
    };

    const updated = [newComment, ...comments];
    saveToStorage(updated);
    setCommentText("");
    setAuthorName("");
    setSuccessMsg(true);
    setTimeout(() => setSuccessMsg(false), 4000);
  };

  const handleReplySubmit = (parentId: string) => {
    if (!replyText.trim()) return;

    const newReply: CommentItem = {
      id: "reply-" + Date.now(),
      author: authorName.trim() || "IGCSE Student",
      avatar: "💬",
      role: "student",
      date: "Just now",
      content: replyText.trim(),
      likes: 0,
    };

    const updated = comments.map((c) => {
      if (c.id === parentId) {
        return {
          ...c,
          replies: [...(c.replies || []), newReply],
        };
      }
      return c;
    });

    saveToStorage(updated);
    setReplyText("");
    setReplyingToId(null);
  };

  const handleLike = (id: string) => {
    if (likedMap[id]) return;
    setLikedMap((prev) => ({ ...prev, [id]: true }));

    const updated = comments.map((c) => {
      if (c.id === id) {
        return { ...c, likes: c.likes + 1 };
      }
      if (c.replies) {
        const nextReplies = c.replies.map((r) =>
          r.id === id ? { ...r, likes: r.likes + 1 } : r
        );
        return { ...c, replies: nextReplies };
      }
      return c;
    });

    saveToStorage(updated);
  };

  useEffect(() => {
    (window as any).ABComments = {
      submit: () => {
        if (!commentText.trim()) return;
        const newComment: CommentItem = {
          id: "comm-" + Date.now(),
          author: authorName.trim() || "IGCSE Physics Student",
          avatar: "🎓",
          role: "student",
          date: "Just now",
          content: commentText.trim(),
          likes: 0,
          replies: [],
        };
        saveToStorage([newComment, ...comments]);
        setCommentText("");
        setAuthorName("");
        setSuccessMsg(true);
        setTimeout(() => setSuccessMsg(false), 4000);
      },
    };
  }, [authorName, commentText, comments]);

  return (
    <div
      id="comment-section"
      className="max-w-3xl mx-auto my-10 p-5 sm:p-7 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl font-sans space-y-6 shadow-xs"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span>💬 Questions About This Topic?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Ask below — Mr. Badr or another student might have the answer.
          </p>
        </div>
        <a
          href="https://wa.me/966530675155?text=Hello%20Mr.%20Ahmed%20Badr,%20I%20have%20a%20question%20regarding%20IGCSE%20Physics."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 text-xs font-bold hover:bg-emerald-100 transition-colors shrink-0"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Ask on WhatsApp</span>
        </a>
      </div>

      {/* Post New Question Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3"
      >
        <div className="grid grid-cols-1 gap-2">
          <input
            type="text"
            id="comment-name-input"
            placeholder="Your name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
          />
        </div>

        <div>
          <textarea
            id="comment-text-input"
            rows={3}
            required
            placeholder="Type your question here..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
          />
        </div>

        {successMsg && (
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Your question has been posted successfully!</span>
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-full shadow-xs transition-all flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Post Question</span>
          </button>
        </div>
      </form>

      {/* List of Questions & Verified Answers */}
      <div id="comments-list" className="space-y-4">
        {comments.map((comm) => (
          <div
            key={comm.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3"
          >
            {/* Author Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-sm">
                  {comm.avatar || "🎓"}
                </span>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <span>{comm.author}</span>
                    {comm.role === "teacher" && (
                      <span className="px-1.5 py-0.2 rounded-md bg-blue-100 dark:bg-blue-900/60 text-blue-900 dark:text-blue-300 font-extrabold text-[10px]">
                        Instructor
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">{comm.date}</div>
                </div>
              </div>

              {/* Upvote Button */}
              <button
                onClick={() => handleLike(comm.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                  likedMap[comm.id]
                    ? "bg-blue-50 dark:bg-blue-950/60 border-blue-300 dark:border-blue-700 text-blue-900 dark:text-blue-300"
                    : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100"
                }`}
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>{comm.likes}</span>
              </button>
            </div>

            {/* Comment Body */}
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-10">
              {comm.content}
            </p>

            {/* Replies Thread */}
            {comm.replies && comm.replies.length > 0 && (
              <div className="pl-6 sm:pl-10 space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                {comm.replies.map((reply) => (
                  <div
                    key={reply.id}
                    className={`p-3.5 rounded-xl border text-xs leading-relaxed space-y-1.5 ${
                      reply.role === "teacher"
                        ? "bg-blue-50/70 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800"
                        : "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{reply.avatar || "💬"}</span>
                        <strong className="font-bold text-slate-900 dark:text-slate-100">
                          {reply.author}
                        </strong>
                        {reply.role === "teacher" && (
                          <span className="px-1.5 py-0.2 rounded bg-amber-200 dark:bg-amber-900 text-amber-950 dark:text-amber-200 font-extrabold text-[9px] flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5" /> Verified Teacher
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-500">{reply.date}</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 pl-6">{reply.content}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Reply Input Trigger */}
            <div className="pl-10 pt-1">
              {replyingToId === comm.id ? (
                <div className="space-y-2 pt-2">
                  <textarea
                    rows={2}
                    placeholder="Write your reply..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setReplyingToId(null)}
                      className="px-3 py-1 text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleReplySubmit(comm.id)}
                      className="px-4 py-1 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold"
                    >
                      Reply
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setReplyingToId(comm.id)}
                  className="text-[11px] font-bold text-blue-700 dark:text-blue-400 hover:underline cursor-pointer"
                >
                  + Add Reply
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
