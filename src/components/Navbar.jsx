import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Bottle', path: '/bottle' },
    { name: 'Chair', path: '/chair' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-lg z-50 border-b border-brand-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <img src="/img/logo w.png" alt="Spark Neer Logo" className="h-10 w-auto" />
              <span className="font-bold text-xl tracking-tight text-gray-900">SPARK NEER</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                  isActive(link.path) ? 'text-brand-600' : 'text-brand-900/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href="#support" className="text-sm font-medium text-brand-900/70 hover:text-brand-600 transition-colors">Support</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-900/70 hover:text-brand-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-brand-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-brand-50 text-brand-600'
                    : 'text-brand-900/80 hover:bg-brand-50/50 hover:text-brand-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="#support" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-brand-900/80 hover:bg-brand-50/50 hover:text-brand-600 transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
