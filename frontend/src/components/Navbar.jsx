import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../utils/constants";

const links = [
  { label: "Home", path: ROUTES.HOME },
  { label: "Sentiment", path: ROUTES.SENTIMENT },
  { label: "Translation", path: ROUTES.TRANSLATION },
  { label: "Summary", path: ROUTES.SUMMARY },
  { label: "Q&A", path: ROUTES.QUESTION_ANSWER },
  { label: "Zero-Shot", path: ROUTES.ZERO_SHOT },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? "text-blue-600 bg-blue-50"
        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <NavLink to={ROUTES.HOME} className="text-lg font-bold text-gray-900">
          AI Text<span className="text-blue-600">Toolkit</span>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-gray-700 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-700 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-700" />
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-1 px-4 pb-4">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;