"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Heart, ShoppingBasket, User } from "lucide-react";
import { useRef, useState } from "react";

import Badge from "@/components/badge";
import Link from "next/link";

const Header = () => {
  const homeMenuRef = useRef(null);

  return (
    <header className="w-full flex flex-col">
      <div className="flex items-center justify-between relative w-full max-w-screen-2xl mx-auto h-16">
        <Link href={"/"} className={` text-lg font-bold  text-neutral-700`}>
          Handgemacht Skulpturen
        </Link>
        <div className="flex items-center gap-6">
          <Link href={"/"} className="text-md text-neutral-500">
            <User size={22} />
          </Link>
          <Link href={"/"} className="text-md text-neutral-500 relative">
            <Badge count={1} />
            <Heart size={22} />
          </Link>
          <Link href={"/cart"} className="text-md text-neutral-500 relative">
            <Badge count={3} />
            <ShoppingBasket size={22} />
          </Link>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto flex items-center justify-center px-4 py-5 border-t w-full">
        <nav className="flex items-center gap-16">
          <MegaMenu />
          <Link
            href="/"
            className="uppercase relative z-40 text-sm font-medium text-neutral-600 tracking-widest"
          >
            Sammlungen
          </Link>
          <Link
            href="/"
            className="uppercase relative z-40 text-sm font-medium text-neutral-600 tracking-widest"
          >
            Geschäft
          </Link>
          <Link
            href="/"
            className="uppercase relative z-40 text-sm font-medium text-neutral-600 tracking-widest"
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
};

const MegaMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <div
      className="relative"
      ref={menuRef}
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <Link
        href="/"
        className="uppercase flex items-center gap-2 text-sm relative z-40 font-medium text-neutral-600 tracking-widest"
      >
        <span>Heim</span>
        <motion.div
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown
            size={16}
            className={`${isMenuOpen ? "mb-0 mt-1" : "mb-1"}`}
          />
        </motion.div>
      </Link>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mega-menu"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="absolute top-[10%] rounded-sm bg-white p-2 pt-8 z-30 w-[320px] shadow-xl flex flex-col items-start justify-start gap-1"
          >
            <Link
              href="/"
              className="flex flex-col gap-1 hover:bg-neutral-100 p-2 rounded-md w-full"
            >
              <p className="text-sm font-medium uppercase text-neutral-600 tracking-widest">
                Neu eingetroffen
              </p>
              <p className="text-xs font-medium text-neutral-500 ">
                Schauen Sie sich unsere neuesten Produkte und Kollektionen an,
                die jetzt erhältlich sind.
              </p>
            </Link>
            <Link
              href="/"
              className="flex flex-col gap-1 hover:bg-neutral-100 p-2 rounded-md w-full"
            >
              <p className="text-sm font-medium uppercase text-neutral-600 tracking-widest">
                Sammlungen
              </p>
              <p className="text-xs font-medium text-neutral-500 ">
                Schauen Sie sich unsere neuesten Produkte und Kollektionen an,
                die jetzt erhältlich sind.
              </p>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
