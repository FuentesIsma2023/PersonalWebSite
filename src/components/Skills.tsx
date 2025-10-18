import { CheckCircle, TrendingUp, Code, Globe, Server, Shield, Database, Terminal as TerminalIcon } from 'lucide-react';

export default function Skills() {
  const currentSkills = [
    {
      category: 'Web Development',
      icon: Globe,
      items: ['Basic web creation with HTML5 and CSS3']
    },
    {
      category: 'Systems & Scripting',
      icon: TerminalIcon,
      items: [
        'Confident using Linux terminal',
        'Writing basic scripts (Bash, Python, PowerShell)'
      ]
    },
    {
      category: 'Networking',
      icon: Server,
      items: [
        'Networking fundamentals and troubleshooting',
        'Packet Tracer labs and firewall setup',
        'Network configuration and diagnostics'
      ]
    },
    {
      category: 'Security',
      icon: Shield,
      items: [
        'Cybersecurity concepts: phishing, ransomware, MITM',
        'DoS/DDoS attack patterns',
        'Encryption basics and security best practices'
      ]
    },
    {
      category: 'Enterprise Tools',
      icon: Database,
      items: [
        'ServiceNow (reports, templates)',
        'Microsoft Exchange (mailboxes, distribution lists)',
        'VMware Horizon and vSphere',
        'Device management: Intune and Jamf (basic)'
      ]
    },
    {
      category: 'Collaboration',
      icon: Code,
      items: [
        'Outlook, Slack, Teams, Zoom',
        'Confluence documentation',
        'Cross-team communication'
      ]
    }
  ];

  const learningSkills = [
    {
      category: 'Networking',
      items: ['Advanced concepts', 'Practical configuration', 'Network automation']
    },
    {
      category: 'Cloud Computing',
      items: ['Microsoft Azure', 'Google Cloud Platform', 'Amazon Web Services']
    },
    {
      category: 'Scripting',
      items: ['Advanced Bash scripting', 'Python for automation', 'PowerShell DSC']
    },
    {
      category: 'Automation',
      items: ['Automator for macOS', 'Workflow optimization', 'Task scheduling']
    },
    {
      category: 'DevOps',
      items: ['Docker containerization', 'Kubernetes orchestration', 'Terraform IaC']
    }
  ];

  return (
    <section className="min-h-screen py-32 px-6 relative">
      <div className="max-w-7xl mx-auto z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 font-mono">
          <span className="text-green-400">$</span> Technical Skills
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <h3 className="text-3xl font-bold text-green-400 font-mono">What I Can Do</h3>
            </div>

            <div className="space-y-6">
              {currentSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-black/50 border border-green-500/30 rounded-lg p-6 backdrop-blur-sm hover:border-green-500/60 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <skill.icon className="w-6 h-6 text-green-400" />
                    <h4 className="text-xl font-semibold text-white font-mono">{skill.category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className="text-green-400 mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <h3 className="text-3xl font-bold text-green-400 font-mono">What I'm Learning</h3>
            </div>

            <div className="space-y-6">
              {learningSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-black/50 border border-green-500/30 rounded-lg p-6 backdrop-blur-sm hover:border-green-500/60 transition-all group"
                >
                  <h4 className="text-xl font-semibold text-white mb-4 font-mono flex items-center gap-2">
                    {skill.category}
                    <span className="text-green-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      [in progress]
                    </span>
                  </h4>
                  <ul className="space-y-2">
                    {skill.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className="text-green-400 mt-1">◆</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-400 h-full rounded-full animate-pulse"
                      style={{ width: `${Math.random() * 30 + 40}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
