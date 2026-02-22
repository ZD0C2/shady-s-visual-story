import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ShowreelModalProps {
  open: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function ShowreelModal({ open, onClose, videoUrl }: ShowreelModalProps) {
  // Convert vimeo URL to embed URL
  const embedUrl = videoUrl.replace("vimeo.com/", "player.vimeo.com/video/") + "?autoplay=1&title=0&byline=0&portrait=0";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop with blur */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-3 rounded-full bg-secondary/60 backdrop-blur-sm text-foreground hover:bg-secondary transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Video container */}
          <motion.div
            className="relative z-10 w-[90vw] max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/20"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <iframe
              src={embedUrl}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Showreel"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
