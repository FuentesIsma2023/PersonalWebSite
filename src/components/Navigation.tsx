import { Terminal } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const sections = ['Home', 'About', 'Skills', 'Learning', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-green-500/30 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-green-400" />
            <span className="text-white font-mono text-lg">ismael.tech</span>
          </div>

          <div className="flex gap-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => onNavigate(section)}
                className={`font-mono text-sm transition-colors ${
                  activeSection === section
                    ? 'text-green-400'
                    : 'text-gray-400 hover:text-green-400'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
