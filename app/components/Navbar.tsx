'use client'
import Link from 'next/link';
import React from 'react';
import { links } from '@/data';
import { FaHamburger } from 'react-icons/fa';


type NavbarProps = {
  links: { label: string; href: string; isButton?: boolean }[];
};

export default function Navbar({

  
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className={`bg-background_color text-white px-8  py-12     md_NavBar`}>
      <div className="container mx-auto flex md:justify-center  items-center ">
        {/* Desktop Links */}
        <div className="hidden md:flex items-center  space-x-6 ">
          {links.map((link, index) => (
            link.isButton ? (
              <Link key={index} href={link.href}>
                <button className="px-4 py-2  hover:border-2 hover:border-secondary hover:bg-background_color rounded-md bg-primary_hover transition">
                  {link.label}
                </button>
              </Link>
            ) : (
              <Link key={index} href={link.href} className="hover:text-secondary">
                {link.label}
              </Link>
            )
          ))}
        </div>



        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-secondary text-2xl focus:outline-none"
        >
        <FaHamburger />
        </button>
      </div>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-background_color ">
          <div className="flex flex-col space-y-4 py-10 px-6">
            {links.map((link, index) => (
              link.isButton ? (
                <Link key={index} href={link.href}>
                  <button className="px-4 py-2 bg-secondary rounded-md hover:bg-secondary_hover transition w-full text-center">
                    {link.label}
                  </button>
                </Link>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:text-secondary text-center"
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
