import { Mail, Linkedin, Github, Send, Terminal } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ismael',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ismael',
      color: 'hover:text-gray-400'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:ismael@example.com',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <section className="min-h-screen py-32 px-6 relative">
      <div className="max-w-5xl mx-auto z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
          <span className="text-green-400">$</span> Get in Touch
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Let's connect and discuss opportunities or technical challenges
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-black/50 border border-green-500/30 rounded-lg p-8 backdrop-blur-sm mb-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6 font-mono flex items-center gap-2">
                <Terminal className="w-6 h-6" />
                Connect With Me
              </h3>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-green-500/20 hover:border-green-500/60 transition-all group ${link.color}`}
                  >
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-all">
                      <link.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="font-mono text-white">{link.label}</div>
                      <div className="text-sm text-gray-400">{link.href.replace('https://', '').replace('mailto:', '')}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-black/50 border border-green-500/30 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">Availability</h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                Open to opportunities in:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▸</span>
                  Technical Support roles
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▸</span>
                  Cloud infrastructure positions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▸</span>
                  DevOps and automation projects
                </li>
              </ul>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-black/50 border border-green-500/30 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">Send a Message</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-green-400 mb-2 font-mono text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-green-500/30 rounded px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors font-mono"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-green-400 mb-2 font-mono text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-green-500/30 rounded px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors font-mono"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-green-400 mb-2 font-mono text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-black/50 border border-green-500/30 rounded px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors font-mono resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className="w-full bg-green-500 text-black font-mono font-semibold py-3 rounded hover:bg-green-400 transition-all shadow-lg shadow-green-500/50 hover:shadow-green-400/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'idle' && (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                  {status === 'sending' && 'Sending...'}
                  {status === 'sent' && 'Message Sent!'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
