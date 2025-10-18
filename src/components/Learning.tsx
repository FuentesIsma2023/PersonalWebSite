import { BookOpen, Calendar } from 'lucide-react';

export default function Learning() {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with Google Cloud Skills Boost',
      date: '2025-10-15',
      excerpt: 'Started exploring Google Cloud through hands-on labs. Working through the fundamentals of compute, storage, and networking. The practical approach helps solidify concepts that seemed abstract in theory.',
      category: 'Cloud Computing'
    },
    {
      id: 2,
      title: 'Understanding Azure Virtual Networks',
      date: '2025-10-08',
      excerpt: 'Deep dive into how Azure handles networking. Learning about subnets, NSGs, and VPN gateways. Drawing connections between traditional networking and cloud infrastructure is helping me grasp the bigger picture.',
      category: 'Networking'
    },
    {
      id: 3,
      title: 'Automating Repetitive Tasks with Bash',
      date: '2025-09-30',
      excerpt: 'Created my first collection of bash scripts to handle daily tasks. Started simple with log analysis and backup automation. Every script I write teaches me something new about error handling and efficiency.',
      category: 'Scripting'
    },
    {
      id: 4,
      title: 'First Steps with Docker',
      date: '2025-09-22',
      excerpt: 'Diving into containerization. Understanding images, containers, and how they work together is eye-opening. Working on building my first multi-container application and learning Docker Compose.',
      category: 'DevOps'
    }
  ];

  return (
    <section className="min-h-screen py-32 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Learning Journey
        </h2>
        <div className="w-20 h-1 bg-blue-600 mb-6"></div>
        <p className="text-xl text-gray-600 mb-12">
          Documenting my progress, labs, and reflections as I grow in IT and cloud computing
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {post.title}
                </h3>
                <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 ml-4" />
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <span>•</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                  {post.category}
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <p className="text-gray-600 mb-2">
              This section will be continuously updated as I progress through my learning journey
            </p>
            <p className="text-blue-600 font-medium">
              More content coming soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
