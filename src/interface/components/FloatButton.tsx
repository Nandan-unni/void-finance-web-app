import React from "react";

const FloatButton = ({ onClick }: { onClick: () => any }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 flex items-center justify-center w-16 h-16 rounded-full bg-themeColor text-white border-none cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    </button>
  );
};

export default FloatButton;
