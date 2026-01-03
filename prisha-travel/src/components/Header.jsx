import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Header = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              PT
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold">Prisha's Travel Paradise</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">Trusted Visa Consultancy · Bhopal</p>
            </div>
            <div className="sm:hidden font-bold text-lg">Prisha's Travel</div>
          </NavLink>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? "text-blue-600 dark:text-blue-400" : "hover:text-blue-600 dark:hover:text-blue-400"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-4 h-9 w-9 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-800 transition"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="h-9 w-9 rounded-full border flex items-center justify-center">
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              <div className="space-y-1">
                <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} className="block w-7 h-0.5 bg-slate-800 dark:bg-slate-200" />
                <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="block w-7 h-0.5 bg-slate-800 dark:bg-slate-200" />
                <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} className="block w-7 h-0.5 bg-slate-800 dark:bg-slate-200" />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 text-lg font-medium ${isActive ? "text-blue-600" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};