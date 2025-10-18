import { Terminal, ChevronDown } from 'lucide-react';

interface HomeProps {
  onNavigate: (section: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-6">
        <div className="mb-8 flex justify-center">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center border-4 border-green-500/50 shadow-lg shadow-green-500/50">
            <Terminal className="w-20 h-20 text-black" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-mono">
          Hi, I'm <span className="text-green-400">Ismael</span>
        </h1>

        <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          <p className="mb-2">A Technical Support Analyst focused on</p>
          <p className="text-green-400 font-mono">solving problems</p>
          <p>and growing in cloud technologies</p>
        </div>

        <div className="flex gap-4 justify-center mb-12">
          <button
            onClick={() => onNavigate('About')}
            className="px-8 py-3 bg-green-500 text-black font-mono font-semibold rounded hover:bg-green-400 transition-all shadow-lg shadow-green-500/50 hover:shadow-green-400/50"
          >
            Learn More
          </button>
          <button
            onClick={() => onNavigate('Contact')}
            className="px-8 py-3 bg-transparent text-green-400 font-mono font-semibold rounded border-2 border-green-500 hover:bg-green-500/10 transition-all"
          >
            Get in Touch
          </button>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-green-400 mx-auto" />
        </div>
      </div>
    </section>
  );
}
