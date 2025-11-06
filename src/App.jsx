import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ChatbotButton from './components/ChatbotButton';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 antialiased selection:bg-fuchsia-500/30 selection:text-fuchsia-900">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(99,102,241,0.12),transparent)]" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <ChatbotButton />
    </div>
  );
}

export default App;
