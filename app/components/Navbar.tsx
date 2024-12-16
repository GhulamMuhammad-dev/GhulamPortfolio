'use client'
import Link from 'next/link';
import React from 'react';
import { links } from '@/data';


type NavbarProps = {
  links: { label: string; href: string; isButton?: boolean }[];
};

export default function Navbar({

  
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className={`bg-background_color text-white py-4 `}>
      <div className="container mx-auto flex md:justify-center  items-center">
        {/* Desktop Links */}
        <div className="hidden md:flex items-center  space-x-6">
          {links.map((link, index) => (
            link.isButton ? (
              <Link key={index} href={link.href}>
                <button className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition">
                  {link.label}
                </button>
              </Link>
            ) : (
              <Link key={index} href={link.href} className="hover:text-blue-400">
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-background_color">
          <div className="flex flex-col space-y-4 py-4 px-6">
            {links.map((link, index) => (
              link.isButton ? (
                <Link key={index} href={link.href}>
                  <button className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition w-full text-center">
                    {link.label}
                  </button>
                </Link>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:text-blue-400 text-center"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
