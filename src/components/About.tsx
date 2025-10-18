import { User, Code, Cloud, Network, Shield } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: User, text: 'Technical Support Analyst' },
    { icon: Network, text: 'Networking & Infrastructure' },
    { icon: Cloud, text: 'Cloud Technologies' },
    { icon: Code, text: 'Scripting & Automation' },
    { icon: Shield, text: 'Cybersecurity Aware' },
  ];

  return (
    <section className="min-h-screen py-32 px-6 relative">
      <div className="max-w-5xl mx-auto z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 font-mono">
          <span className="text-green-400">$</span> About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-black/50 border border-green-500/30 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">Profile</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a Technical Support Analyst with hands-on experience in IT support,
                networking, and cloud environments. My work involves troubleshooting complex
                technical issues, managing infrastructure, and implementing solutions that
                improve efficiency.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I have practical knowledge in network configuration, virtualization,
                device management, and collaboration platforms. I'm comfortable working
                with ServiceNow, VMware, Microsoft Exchange, and various endpoint management tools.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Beyond solving immediate problems, I'm passionate about automation and
                continuously expanding my expertise in cloud computing, scripting, and DevOps practices.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-black/50 border border-green-500/30 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-green-400 mb-6 font-mono">Expertise Areas</h3>
              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/30 group-hover:bg-green-500/20 transition-all">
                      <item.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <span className="text-gray-300 font-mono">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/50 border border-green-500/30 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">Philosophy</h3>
              <p className="text-gray-300 leading-relaxed italic">
                "Every problem is an opportunity to learn something new. I approach technical
                challenges with curiosity and persistence, always seeking to understand the
                'why' behind the solution."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
