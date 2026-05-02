import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
    { to: '/admin', label: 'Admin' }
  ];

  return (
    <nav className="sticky top-0 z-50 px-4 py-3">
      <div className="max-w-6xl mx-auto glass-card rounded-2xl p-3 flex flex-wrap justify-between items-center gap-3">
        <h1 className="font-bold text-xl text-slate-900 dark:text-white">Suruchi Portfolio</h1>
        <div className="flex items-center gap-2 flex-wrap">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`pretty-btn ${location.pathname === link.to ? 'bg-indigo-600 text-white' : 'bg-white/70 text-slate-700 dark:bg-slate-800 dark:text-slate-200'}`}
            >
              {link.label}
            </Link>
          ))}
          <button onClick={toggleTheme} className="pretty-btn bg-emerald-500 text-white">
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>
    </nav>
  );
}
