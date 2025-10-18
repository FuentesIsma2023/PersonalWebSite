import { BookOpen, Calendar } from 'lucide-react';

export default function Learning() {
  const posts = [
    {
      id: 1,
      title: 'Cloud Computing AWS, Azure, Google Cloud',
      date: '2025-10-15',
      excerpt: 'Started exploring Google Cloud, AWS, and Azure through hands-on labs. Working through the fundamentals of compute, storage, and networking. The practical approach helps solidify concepts that seemed abstract in theory.',
      category: 'Cloud Computing'
    },
    {
      id: 2,
      title: 'Scripting with Python',
      date: '2025-10-08',
      excerpt: 'Python script that organizes my downloads folder by file extension',
      category: 'Scripting'
    },
    {
      id: 3,
      title: 'Scripting with Bash',
      date: '2025-06-30',
      excerpt: 'Created my first collection of bash scripts to handle daily tasks. My main project is an Automator-activated script for Mac that automates the initial steps of drafting emails in Outlook. It prompts for the email type (start, follow-up, or ticket closing), uses a specific template, copies the text, and opens Outlook, ready for pasting.',
      category: 'Scripting',
    },
    {
      id: 4,
      title: 'Scripting with PowerShell',
      date: '2025-09-22',
      excerpt: 'Developed several utilities to streamline daily tasks. Projects include a script to quickly launch my daily applications, one to retrieve Access Control Lists (ACLs) for file systems, and another to list all currently mapped shared drives.',
      category: 'Scripting'
    },
    {
      id: 5,
      title: 'First Steps with Kubernetes',
      date: '2025-09-22',
      excerpt: 'Completed initial labs, focusing on the basics of orchestration. Deployed a simple web application using a Deployment, exposed it with a Service, and gained a fundamental understanding of Pods, Nodes, and kubectl commands.',
      category: 'DevOps'
    },
    {
      id: 6,
      title: 'First Steps with Docker',
      date: '2025-09-22',
      excerpt: 'Took my first steps with containerization. I successfully built a custom Docker image for a simple application, pushed it to a public registry, and ran it locally, learning the core concepts of Dockerfiles and image layers.',
      category: 'DevOps'
    },
    {
      id: 7,
      title: 'First Steps with Terraform',
      date: '2025-09-22',
      excerpt: 'Began exploring Infrastructure as Code. Completed my first project by writing a basic extt.tf file to provision a single virtual machine (VM) and a virtual network in a cloud provider, learning the fundamental workflow of init, plan, and apply',
      category: 'DevOps'
    },
    {
      id: 8,
      title: 'Cloud Networking',
      date: '2025-05-25',
      excerpt: 'Began exploring Infrastructure as Code. Completed my first project by writing a basic extt.tf file to provision a single virtual machine (VM) and a virtual network in a cloud provider, learning the fundamental workflow of init, plan, and apply',
      category: 'Networking, Cloud Computing'
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
