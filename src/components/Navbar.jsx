import { useState, useEffect } from 'react';
import { Menu, X, Rocket, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClasses = scrolled
    ? 'backdrop-blur-md bg-white/70 dark:bg-zinc-900/50 shadow-sm'
    : 'bg-transparent';

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-sm font-medium">
      <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
      <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
      <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
      <li className="hidden md:flex items-center gap-3">
        <a href="https://github.com/" aria-label="GitHub" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          <Linkedin size={18} />
        </a>
      </li>
    </ul>
  );

  return (
    <header className={`fixed top-0 inset-x-0 z-50 ${navClasses} transition-all`}> 
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-primary to-fuchsia-500 text-white">
            <Rocket size={18} />
          </span>
          <span className="tracking-tight">MyPortfolio</span>
        </a>

        <div className="hidden md:block">
          <NavLinks />
        </div>

        <button className="md:hidden p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800">
          <div className="px-4 py-4">
            <NavLinks />
            <div className="mt-4 flex items-center gap-3">
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
