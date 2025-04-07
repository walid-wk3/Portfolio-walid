import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

export function Navbar() {
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
          <img src="/images/logo-wk.png" alt="Logo" className="h-8 w-auto mr-2" />
          <span className="text-xl font-bold text-sky-400">Portfolio Walid Kherchouch</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-300 hover:text-sky-400 px-3 py-3 rounded-md text-sm font-medium transition-colors">
                Accueil
              </Link>
              <Link to="/bts" className="text-gray-300 hover:text-sky-400 px-3 py-3 rounded-md text-sm font-medium transition-colors">
                BTS SIO
              </Link>
              <Link to="/projects" className="text-gray-300 hover:text-sky-400 px-3 py-3 rounded-md text-sm font-medium transition-colors">
                Projets
              </Link>
              <Link to="/stages" className="text-gray-300 hover:text-sky-400 px-3 py-3 rounded-md text-sm font-medium transition-colors">
                Stages
              </Link>
              <Link to="/veille" className="text-gray-300 hover:text-sky-400 px-3 py-3 rounded-md text-sm font-medium transition-colors">
                Veille Technologique
              </Link>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-sky-400/20 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-gray-300 hover:text-sky-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-300 hover:text-sky-400" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-sky-400/20 transition-colors mr-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-300 hover:text-sky-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-300 hover:text-sky-400" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-300 hover:text-sky-400 hover:bg-sky-400/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-sky-400/20">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-sky-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/bts" 
                className="text-gray-300 hover:text-sky-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                BTS SIO
              </Link>
              <Link 
                to="/projects" 
                className="text-gray-300 hover:text-sky-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projets
              </Link>
              <Link 
                to="/stages" 
                className="text-gray-300 hover:text-sky-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Stages
              </Link>
              <Link 
                to="/veille" 
                className="text-gray-300 hover:text-sky-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Veille Technologique
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}