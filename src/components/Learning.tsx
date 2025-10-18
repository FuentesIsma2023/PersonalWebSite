import { BookOpen, Calendar, Tag } from 'lucide-react';

export default function Learning() {
  const posts = [
    {
      id: 1,
      title: 'Setting Up My First Kubernetes Cluster',
      date: '2025-10-15',
      tags: ['Kubernetes', 'DevOps', 'Container Orchestration'],
      excerpt: 'Documenting my journey learning Kubernetes. Started with minikube and successfully deployed my first pod. Understanding the architecture of control plane, nodes, and how pods communicate.',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Azure Fundamentals: Networking Concepts',
      date: '2025-10-10',
      tags: ['Azure', 'Cloud', 'Networking'],
      excerpt: 'Deep dive into Azure Virtual Networks, subnets, NSGs, and VPN gateways. Comparing Azure networking with traditional on-premises setups and understanding the key differences.',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Automating Daily Tasks with Bash Scripts',
      date: '2025-10-05',
      tags: ['Bash', 'Automation', 'Scripting'],
      excerpt: 'Created a collection of bash scripts to automate repetitive tasks: log analysis, backup automation, and system health checks. Learning about error handling and making scripts more robust.',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'Docker Containerization: From Basics to Practice',
      date: '2025-09-28',
      tags: ['Docker', 'Containers', 'DevOps'],
      excerpt: 'Understanding Docker fundamentals: images, containers, volumes, and networks. Built my first multi-container application using Docker Compose and explored best practices for Dockerfile creation.',
      readTime: '6 min read'
    }
  ];

  return (
    <section className="min-h-screen py-32 px-6 relative">
      <div className="max-w-6xl mx-auto z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
          <span className="text-green-400">$</span> Learning Journey
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Documenting my progress, labs, and insights as I expand my technical knowledge
        </p>

        <div className="grid gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-black/50 border border-green-500/30 rounded-lg p-8 backdrop-blur-sm hover:border-green-500/60 transition-all group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors font-mono">
                  {post.title}
                </h3>
                <BookOpen className="w-6 h-6 text-green-400 flex-shrink-0 ml-4" />
              </div>

              <div className="flex items-center gap-6 mb-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-green-400" />
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full border border-green-500/30 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-black/50 border border-green-500/30 rounded-lg p-8 backdrop-blur-sm">
            <p className="text-gray-300 mb-4">
              This section will be continuously updated as I progress through my learning journey
            </p>
            <p className="text-green-400 font-mono text-sm">
              &gt; More content coming soon...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
