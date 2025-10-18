import { Briefcase, GraduationCap, Award } from 'lucide-react';

export default function About() {
  return (
    <section className="min-h-screen py-32 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-blue-600 mb-12"></div>

        <div className="space-y-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Professional Background</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  I bring approximately 15 years of experience in physical security, combined with about 3 years
                  in IT. Currently, I work as a Technical Support Analyst at Warner Brothers Discovery, where I
                  solve technical challenges and support critical infrastructure.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My transition from physical security to IT has given me a unique perspective on problem-solving,
                  risk assessment, and operational reliability. I understand the importance of security, stability,
                  and efficient systems.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Education</h3>
                <p className="text-gray-700 leading-relaxed">
                  I'm currently pursuing a Software and Network Engineering degree at UNITEC. This formal education
                  complements my hands-on experience, helping me build a strong foundation in networking fundamentals,
                  software development, and modern IT practices.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">What Drives Me</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  I'm passionate about automation, cloud computing, and scripting. I enjoy finding ways to make
                  processes more efficient and learning new technologies that solve real-world problems.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My goal is to bridge operational experience with modern cloud technologies, combining reliability
                  with innovation. I believe that continuous learning and practical application are the keys to
                  growth in this field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
