import React, { useState } from "react";
import { MessageCircle, X, Send, Phone, User, Check, Copy, Sparkles, ExternalLink, Globe } from "lucide-react";

interface WhatsAppWidgetProps {
  instructorName?: string;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  instructorName = "Mr. Ahmed Badr",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<"ksa" | "eg">("ksa");
  const [copied, setCopied] = useState<string | null>(null);
  const [messageTopic, setMessageTopic] = useState("Tutoring & Physics Support");

  const contacts = {
    ksa: {
      country: "Saudi Arabia (KSA)",
      flag: "🇸🇦",
      rawNumber: "966530675155",
      formatted: "+966 53 067 5155",
      local: "0530675155",
    },
    eg: {
      country: "Egypt",
      flag: "🇪🇬",
      rawNumber: "201099683837",
      formatted: "+20 109 968 3837",
      local: "01099683837",
    },
  };

  const currentContact = contacts[selectedCountry];

  const quickMessages = [
    { label: "Tutoring & Lessons", text: `Hello ${instructorName}, I would like to inquire about IGCSE Physics tutoring lessons and revision classes.` },
    { label: "Paper 4 Question Help", text: `Hello ${instructorName}, I have a question about a Cambridge IGCSE Physics Theory question.` },
    { label: "Paper 6 Practical Help", text: `Hello ${instructorName}, I need guidance on IGCSE Alternative to Practical (Paper 6) experimental design.` },
    { label: "General Inquiry", text: `Hello ${instructorName}, I am using your IGCSE Physics Hub and would like to get in touch.` },
  ];

  const [customText, setCustomText] = useState(quickMessages[0].text);

  const handleCopyNumber = (num: string, label: string) => {
    navigator.clipboard.writeText(num);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleOpenWhatsApp = (countryCode: "ksa" | "eg" = selectedCountry, textToSend?: string) => {
    const target = contacts[countryCode];
    const message = encodeURIComponent(textToSend || customText);
    const url = `https://wa.me/${target.rawNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Expanded Popup Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-indigo-800 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white border border-white/30 backdrop-blur-xs font-bold text-sm">
                  AB
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">{instructorName}</h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-100">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                    <span>Online on WhatsApp (KSA & Egypt)</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-slate-50/60">
            {/* Country Selector Tabs */}
            <div className="space-y-1.5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                Select WhatsApp Line:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCountry("ksa")}
                  className={`p-2.5 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                    selectedCountry === "ksa"
                      ? "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold shadow-xs ring-1 ring-emerald-400"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="text-base">🇸🇦</span>
                    <div>
                      <span className="block text-[11px] font-bold leading-tight">Saudi Arabia</span>
                      <span className="block text-[10px] font-mono text-slate-500">+966 53 067 5155</span>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedCountry("eg")}
                  className={`p-2.5 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                    selectedCountry === "eg"
                      ? "bg-teal-50 border-teal-400 text-teal-950 font-bold shadow-xs ring-1 ring-teal-400"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="text-base">🇪🇬</span>
                    <div>
                      <span className="block text-[11px] font-bold leading-tight">Egypt</span>
                      <span className="block text-[10px] font-mono text-slate-500">+20 109 968 3837</span>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Current Active Number Details */}
            <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-2 text-xs">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">
                    {currentContact.country} Direct Line
                  </span>
                  <span className="font-mono font-bold text-slate-900 text-xs sm:text-sm">
                    {currentContact.formatted}
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleCopyNumber(currentContact.formatted, selectedCountry)}
                className="px-2.5 py-1.5 rounded-lg text-[11px] font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1 cursor-pointer border border-slate-200"
              >
                {copied === selectedCountry ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied === selectedCountry ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Quick Inquiry Selectors */}
            <div>
              <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                Quick Template:
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {quickMessages.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      setMessageTopic(item.label);
                      setCustomText(item.text);
                    }}
                    className={`px-2.5 py-1.5 rounded-lg text-left text-[11px] font-medium border transition-all cursor-pointer truncate ${
                      messageTopic === item.label
                        ? "bg-emerald-50 text-emerald-800 border-emerald-300 font-bold shadow-2xs"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                Your Message:
              </label>
              <textarea
                rows={2}
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-normal leading-relaxed resize-none shadow-2xs"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-1 flex items-center gap-2">
              <button
                onClick={() => handleOpenWhatsApp(selectedCountry)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp ({selectedCountry.toUpperCase()})</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center gap-2.5 px-4 py-3 rounded-full shadow-xl transition-all transform active:scale-95 cursor-pointer border ${
          isOpen
            ? "bg-slate-900 text-white border-slate-700"
            : "bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-400/30"
        }`}
        title="Chat with Mr. Ahmed Badr on WhatsApp (KSA: +966 53 067 5155 | EG: +20 109 968 3837)"
      >
        <MessageCircle className="w-5 h-5 fill-current animate-bounce" />
        <span className="text-xs font-bold tracking-wide">
          {isOpen ? "Close WhatsApp" : "Chat with Mr. Ahmed Badr"}
        </span>
      </button>
    </div>
  );
};
