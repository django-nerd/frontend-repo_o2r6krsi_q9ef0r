import { useEffect, useState } from 'react';
import { Menu, X, Rocket, Github, Linkedin, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme === 'dark' || (theme === 'system' && prefersDark)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const navClasses = scrolled
    ? 'backdrop-blur-md bg-white/70 dark:bg-zinc-900/60 shadow-sm'
    : 'bg-transparent';

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-sm font-medium">
      <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
      <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
      <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
      <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
      <li><a href="#certifications" className="hover:text-primary transition-colors">Certifications</a></li>
      <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
    </ul>
  );

  return (
    <header className={`fixed top-0 inset-x-0 z-50 ${navClasses} transition-all`}> 
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-primary to-fuchsia-500 text-white">
            <Rocket size={18} />
          </span>
          <span className="tracking-tight">[Your Name]</span>
        </a>

        <div className="hidden md:block">
          <NavLinks />
        </div>

        <div className="flex items-center gap-2">
          <button
            className="hidden md:inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            <span className="hidden lg:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <a href="https://github.com/" aria-label="GitHub" target="_blank" rel="noreferrer" className="hidden md:inline-flex p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="hidden md:inline-flex p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
            <Linkedin size={18} />
          </a>
          <button className="md:hidden p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800">
          <div className="px-4 py-4">
            <NavLinks />
            <div className="mt-4 flex items-center gap-3">
              <button
                className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60"
                onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </button>
              <a href="https://github.com/" aria-label="GitHub" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
