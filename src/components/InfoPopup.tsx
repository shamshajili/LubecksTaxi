import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InfoPopupProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const InfoPopup: React.FC<InfoPopupProps> = ({ open, onClose, children }) => {

  // 🔒 Disable background scroll when popup is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center 
                     bg-black/50 backdrop-blur-[2px] p-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="
              bg-white text-black w-full max-w-md
              rounded-2xl shadow-2xl
              px-6 py-5 sm:px-7 sm:py-6
            "
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InfoPopup;
