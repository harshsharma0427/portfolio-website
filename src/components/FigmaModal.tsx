import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Code, Info, Check, Sparkles } from 'lucide-react';

interface FigmaModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
  projectId: string;
  defaultFigmaUrl?: string;
}

// Robust helper to extract/construct a working Figma embed URL from any input
function parseFigmaUrl(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return '';

  // 1. If it's a full iframe code, extract the src URL
  const srcMatch = trimmed.match(/src="([^"]+)"/);
  if (srcMatch && srcMatch[1]) {
    return srcMatch[1];
  }

  // 2. If it is already an embed URL, use it directly
  if (trimmed.includes('figma.com/embed')) {
    return trimmed;
  }

  // 3. If it is a standard Figma design, file, or prototype link, convert to embed format
  if (
    trimmed.includes('figma.com/file/') ||
    trimmed.includes('figma.com/design/') ||
    trimmed.includes('figma.com/proto/')
  ) {
    return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(trimmed)}`;
  }

  return trimmed;
}

export default function FigmaModal({
  isOpen,
  onClose,
  projectName,
  projectId,
  defaultFigmaUrl = '',
}: FigmaModalProps) {
  const [inputValue, setInputValue] = useState('');
  const [savedUrl, setSavedUrl] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isSavedSuccessfully, setIsSavedSuccessfully] = useState(false);

  // Load from localStorage or use default
  useEffect(() => {
    if (isOpen) {
      const stored = localStorage.getItem(`figma_url_${projectId}`);
      if (stored) {
        setSavedUrl(stored);
        setInputValue(stored);
        setIsEditing(false);
      } else if (defaultFigmaUrl) {
        setSavedUrl(defaultFigmaUrl);
        setInputValue(defaultFigmaUrl);
        setIsEditing(false);
      } else {
        setIsEditing(true);
      }
    }
  }, [isOpen, projectId, defaultFigmaUrl]);

  const handleSave = () => {
    const parsed = parseFigmaUrl(inputValue);
    if (parsed) {
      localStorage.setItem(`figma_url_${projectId}`, parsed);
      setSavedUrl(parsed);
      setIsEditing(false);
      setIsSavedSuccessfully(true);
      setTimeout(() => setIsSavedSuccessfully(false), 3000);
    }
  };

  const handleReset = () => {
    localStorage.removeItem(`figma_url_${projectId}`);
    setSavedUrl(defaultFigmaUrl);
    setInputValue(defaultFigmaUrl);
    if (!defaultFigmaUrl) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative bg-neutral-950 border border-neutral-800/80 rounded-3xl w-full max-w-5xl h-[80vh] flex flex-col overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.15)] z-10"
        >
          {/* Top Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-900 bg-neutral-950/60 backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <h3 className="text-lg sm:text-xl font-display font-extrabold text-white">
                  {projectName} Design Prototype
                </h3>
              </div>
              <p className="text-xs text-neutral-400 font-sans mt-0.5">
                Interactive Figma Showcase
              </p>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-neutral-900 border border-neutral-800/80 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all duration-300"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 bg-[#040404] flex flex-col justify-between">
            {isEditing ? (
              // LINK CONFIGURATION VIEW (HINDI & ENGLISH INSTRUCTIONS)
              <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full py-6">
                <div className="mb-6 text-center">
                  <div className="inline-flex p-3 rounded-2xl bg-cyan-950/20 border border-cyan-800/30 text-cyan-400 mb-3">
                    <Code size={24} />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">
                    Apna Figma Embed Code ya Link Add Karein
                  </h4>
                  <p className="text-neutral-400 font-sans text-sm">
                    Follow the simple instructions below to display your design prototype live in 3D:
                  </p>
                </div>

                {/* Instructions Panel */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-neutral-900/40 border border-neutral-900 p-5 rounded-2xl text-xs leading-relaxed text-neutral-300">
                  <div className="space-y-2 border-b md:border-b-0 md:border-r border-neutral-900 pb-3 md:pb-0 md:pr-4">
                    <h5 className="font-semibold text-cyan-400 flex items-center gap-1.5 font-display">
                      <Sparkles size={12} /> Figma Se Link Kaise Lein?
                    </h5>
                    <ol className="list-decimal list-inside space-y-1 text-neutral-400 font-sans">
                      <li>Figma design file open karein.</li>
                      <li>Top right me <strong className="text-white">Share</strong> button par click karein.</li>
                      <li><strong className="text-white">"Get embed code"</strong> click karke code copy karein, ya standard share link copy karein.</li>
                    </ol>
                  </div>
                  <div className="space-y-2 md:pl-2">
                    <h5 className="font-semibold text-cyan-400 flex items-center gap-1.5 font-display">
                      <Info size={12} /> Why Embed This?
                    </h5>
                    <p className="text-neutral-400 font-sans">
                      By embedding your Figma live frame, recruiters can directly view and interact with your responsive screens, vector grids, and layouts in real-time.
                    </p>
                  </div>
                </div>

                {/* Input Textarea */}
                <div className="space-y-4">
                  <div className="relative">
                    <textarea
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder='Paste standard Figma file link or <iframe src="..."> code here...'
                      className="w-full h-28 bg-neutral-950 border border-neutral-800 focus:border-cyan-500/50 rounded-2xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all font-mono"
                    />
                  </div>

                  <div className="flex gap-3 justify-end">
                    {savedUrl && (
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-5 py-2.5 rounded-xl border border-neutral-800 text-neutral-400 hover:text-white font-display text-xs font-semibold uppercase tracking-wider transition-all"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      onClick={handleSave}
                      disabled={!inputValue.trim()}
                      className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-black font-display text-xs font-bold uppercase tracking-wider shadow-[0_4px_20px_rgba(34,211,238,0.25)] transition-all flex items-center gap-1.5"
                    >
                      <span>Save and Embed Live</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // ACTIVE IFRAME PREVIEW VIEW
              <div className="flex-1 flex flex-col h-full min-h-0">
                {/* Embedded Figma Prototype Frame */}
                <div className="flex-1 bg-black border border-neutral-900 rounded-2xl overflow-hidden relative group/frame min-h-0">
                  <iframe
                    title={`${projectName} Figma Embed`}
                    src={savedUrl}
                    allowFullScreen
                    className="w-full h-full border-0 bg-neutral-950"
                  />
                </div>

                {/* Bottom Config controls */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-neutral-900">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-sans">
                    <Info size={14} className="text-cyan-400" />
                    <span>Live Interactive Prototype. You can pan, zoom, and select layers directly.</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-display font-semibold text-neutral-300 hover:text-white hover:border-neutral-700 transition-all"
                    >
                      Update Link / Paste Embed Code
                    </button>
                    
                    <button
                      onClick={handleReset}
                      className="px-3 py-2 rounded-xl bg-neutral-900/40 text-xs font-display font-semibold text-red-400/80 hover:text-red-400 hover:bg-red-950/20 transition-all"
                    >
                      Reset
                    </button>

                    <a
                      href={savedUrl.replace('/embed', '')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
                      title="Open in Figma"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
