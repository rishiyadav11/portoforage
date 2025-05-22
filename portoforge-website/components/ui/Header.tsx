
"use client";

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
  ThemeToggleButton,
} from "@/components/ui/Navbar";
import { useState } from "react";
import { FaSquareGithub } from "react-icons/fa6";

const Header = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Portfolios", link: "/portfolios" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },

  ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center space-x-4 relative"> {/* <-- flex container for buttons */}
            <NavbarButton href="https://github.com/rishiyadav11/portoforage">
              <FaSquareGithub />
            </NavbarButton>
            <ThemeToggleButton />
          </div>
        </NavBody>
           {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
             
             <NavbarButton href="https://github.com/rishiyadav11/"
              onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full">
              <FaSquareGithub />
            </NavbarButton>
            <ThemeToggleButton />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Header;
