import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="border-b border-slate-200 dark:border-slate-700 p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl text-slate-900 dark:text-white">Suruchi Portfolio</h1>
      <div className="flex gap-4 items-center">
        <Link to="/" className="text-slate-700 dark:text-slate-200">Home</Link>
        <Link to="/projects" className="text-slate-700 dark:text-slate-200">Projects</Link>
        <Link to="/contact" className="text-slate-700 dark:text-slate-200">Contact</Link>
        <Link to="/admin" className="text-slate-700 dark:text-slate-200">Admin</Link>
        <button onClick={toggleTheme} className="px-3 py-1 rounded bg-indigo-500 text-white">
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </div>
    </nav>
  );
}
