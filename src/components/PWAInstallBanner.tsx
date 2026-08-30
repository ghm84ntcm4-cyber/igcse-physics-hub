import React, { useState, useEffect } from "react";
import { Download, X, Share } from "lucide-react";

export const PWAInstallBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [isIOS, setIsIOS] = useState<boolean>(false);
  const [showIOSGuide, setShowIOSGuide] = useState<boolean>(false);

  useEffect(() => {
    // 1. Register Service Worker with Auto-Update Mechanism
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        // updateViaCache: 'none' ensures the browser never caches sw.js via HTTP cache
        navigator.serviceWorker
          .register("/sw.js", { updateViaCache: "none" })
          .then((reg) => {
            console.log("Service Worker registered with scope:", reg.scope);

            // Check for updates periodically when the user returns to the tab
            const checkForUpdate = () => {
              if (document.visibilityState === "visible") {
                reg.update().catch((err) => console.log("SW update check failed:", err));
              }
            };
            document.addEventListener("visibilitychange", checkForUpdate);

            // Listen for new service worker updates found
            reg.addEventListener("updatefound", () => {
              const newWorker = reg.installing;
              if (newWorker) {
                newWorker.addEventListener("statechange", () => {
                  if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                    // New content is available; tell new worker to activate immediately
                    newWorker.postMessage({ type: "SKIP_WAITING" });
                  }
                });
              }
            });
          })
          .catch((err) => console.log("Service Worker registration failed:", err));

        // When the controller changes (new SW activated), refresh to load fresh code
        let refreshing = false;
        navigator.serviceWorker.addEventListener("controllerchange", () => {
          if (!refreshing) {
            refreshing = true;
            console.log("[Service Worker] New version activated, reloading for fresh assets...");
            window.location.reload();
          }
        });
      });
    }

    // 2. Check if already installed or dismissed
    const isDismissed = localStorage.getItem("abphysics_install_dismissed");
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;

    if (isStandalone || isDismissed) {
      return;
    }

    // 3. Detect iOS Safari
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // 4. Handle beforeinstallprompt on Chrome/Android/Desktop
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowBanner(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // If iOS and not standalone and not dismissed, show banner with iOS guide trigger
    if (isIosDevice && !isStandalone && !isDismissed) {
      // Delay slightly for smooth page entry
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 3000);
      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSGuide(true);
      return;
    }

    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to install prompt: ${outcome}`);
    setDeferredPrompt(null);
    setShowBanner(false);
  };

  const handleDismiss = () => {
    setShowBanner(false);
    setShowIOSGuide(false);
    localStorage.setItem("abphysics_install_dismissed", "true");
  };

  if (!showBanner) return null;

  return (
    <>
      <div
        id="install-banner"
        className="fixed bottom-0 left-0 right-0 z-50 bg-blue-900 text-white px-4 sm:px-6 py-3.5 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3 font-sans border-t border-blue-800 animate-in slide-in-from-bottom duration-300"
      >
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span className="text-xl shrink-0">📲</span>
          <span className="text-xs sm:text-sm font-medium text-slate-100">
            Add <strong className="text-amber-400 font-bold">IGCSE Physics Hub</strong> to your home screen for quick offline access!
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            id="install-btn"
            onClick={handleInstallClick}
            className="bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Install App</span>
          </button>

          <button
            id="dismiss-install-btn"
            onClick={handleDismiss}
            className="bg-transparent hover:bg-white/10 text-white/80 hover:text-white border border-white/30 px-3.5 py-2 rounded-full font-medium text-xs sm:text-sm transition-colors cursor-pointer"
          >
            Not now
          </button>
        </div>
      </div>

      {/* iOS Safari Installation Guide Modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4 animate-in slide-in-from-bottom-5">
            <div className="flex items-center justify-between">
              <h4 className="font-extrabold text-slate-900 dark:text-slate-100 text-sm sm:text-base flex items-center gap-2">
                <span>Install on iPhone / iPad</span>
              </h4>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <ol className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-900 font-bold flex items-center justify-center text-xs shrink-0">
                  1
                </span>
                <span>
                  Tap the <strong className="font-bold inline-flex items-center gap-1 text-blue-600"><Share className="w-3.5 h-3.5" /> Share</strong> button in your Safari toolbar.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-900 font-bold flex items-center justify-center text-xs shrink-0">
                  2
                </span>
                <span>
                  Scroll down and tap <strong className="font-bold">"Add to Home Screen"</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-900 font-bold flex items-center justify-center text-xs shrink-0">
                  3
                </span>
                <span>
                  Tap <strong className="font-bold text-blue-600">Add</strong> in the top right corner.
                </span>
              </li>
            </ol>

            <button
              onClick={() => {
                setShowIOSGuide(false);
                handleDismiss();
              }}
              className="w-full py-2.5 bg-blue-900 text-white rounded-xl font-bold text-xs"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
};
