import React from 'react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = React.useState<boolean>(false);

  React.useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = stored ? stored === 'dark' : prefersDark;
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="fixed right-4 top-2 md:left-4 md:top-auto md:bottom-6 z-50 rounded-full w-12 h-12 flex items-center justify-center shadow-lg border border-gray/30 bg-primary/90 backdrop-blur-md hover:shadow-xl transition-all"
    >
      <span className="text-xl">
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  );
};

export default ThemeToggle;


