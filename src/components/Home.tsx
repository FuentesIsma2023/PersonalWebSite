import { ChevronDown } from 'lucide-react';

interface HomeProps {
  onNavigate: (section: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-white">
      <div className="text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl">
            <span className="text-white text-5xl font-bold">I</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm Ismael
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
          I'm a Technical Support Analyst passionate about cloud technologies, scripting, and automation.
        </p>

        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          My focus is on solving problems efficiently and learning every day.
        </p>

        <div className="flex gap-4 justify-center mb-16">
          <button
            onClick={() => onNavigate('About')}
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Learn More
          </button>
          <button
            onClick={() => onNavigate('Contact')}
            className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all"
          >
            Get in Touch
          </button>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  );
}
