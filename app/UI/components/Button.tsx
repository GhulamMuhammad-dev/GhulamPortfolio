import React from 'react';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-semibold rounded-lg shadow transition ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
