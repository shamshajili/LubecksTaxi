import React from "react";

interface InfoPopupProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const InfoPopup: React.FC<InfoPopupProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="absolute inset-0 bg-black/40 flex items-end justify-center rounded-2xl z-30"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          bg-white text-black p-6 rounded-2xl shadow-2xl w-[90%] sm:w-[70%]
          animate-slideUp
        "
      >
        {children}
      </div>
    </div>
  );
};

export default InfoPopup;
