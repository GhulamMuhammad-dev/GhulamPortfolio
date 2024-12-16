import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  bgColor?: string; // Background color
  hoverColor?: string; // Hover color
  href?: string; // Optional link for the button
  className?: string; // Additional CSS classes
  children: React.ReactNode; // Button content
};

const Button: React.FC<ButtonProps> = ({
  bgColor = "bg-blue-500",
  hoverColor = "hover:bg-blue-600",
  href,
  className = "",
  children,
}) => {
  const buttonClass = `px-4 py-2 rounded-md font-robert-regular transition ${bgColor} ${hoverColor} text-white ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return <button className={buttonClass}>{children}</button>;
};

export default Button;