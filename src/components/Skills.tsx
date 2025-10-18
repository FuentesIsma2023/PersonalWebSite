import { Code, TrendingUp } from 'lucide-react';

export default function Skills() {
  const currentSkills = [
    'HTML5 and CSS3 for basic web creation',
    'Linux terminal and scripting basics',
    'ServiceNow (reports, templates)',
    'Microsoft Exchange (mailboxes, distribution lists)',
    'VMware Horizon and vSphere',
    'Networking fundamentals and troubleshooting',
    'Packet Tracer labs and firewall configuration',
    'Cybersecurity awareness (phishing, ransomware, MITM, DoS/DDoS, encryption basics)',
    'Device management with Intune and Jamf (basic level)',
    'Collaboration tools: Outlook, Slack, Teams, Zoom, Confluence',
    'Ms Excel: Macros creation, Pivot Tables, Dashboards'
  ];

  const learningSkills = [
    'Cloud Computing: Azure, Google Cloud, AWS',
    'Scripting: Bash, Python, PowerShell',
    'Automation: Automator, Microsoft Power Automate, Jenkins',
    'DevOps tools: Docker, Kubernetes, Terraform',
    'Advanced networking concepts and configuration'
  ];

  return (
    <section className="min-h-screen py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Technical Skills
        </h2>
        <div className="w-20 h-1 bg-blue-600 mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">What I Know</h3>
            </div>

            <div className="space-y-3">
              {currentSkills.map((skill, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">What I'm Learning</h3>
            </div>

            <div className="space-y-3 mb-8">
              {learningSkills.map((skill, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{skill}</p>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-blue-600 mb-4 font-mono">Philosophy</h3>
              <p className="text-gray-700 leading-relaxed italic">
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
