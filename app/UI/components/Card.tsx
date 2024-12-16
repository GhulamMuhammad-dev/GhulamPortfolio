import React from 'react';

type CardProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default Card;
