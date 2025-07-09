const projects = [
  {
    id: 1,
    title: 'Restorn',
    description: 'Modern restaurant website with responsive design and interactive menu system.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    technologies: ['React.js', 'CSS3', 'JavaScript'],
    features: [
      'Responsive Design',
      'Interactive Menu',
      'Online Reservation',
      'Modern UI/UX'
    ],
    liveDemo: '#',
    github: '#',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    id: 2,
    title: 'Mymakaan',
    description: 'Real estate platform with property listings and advanced search functionality.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    technologies: ['React.js', 'Tailwind', 'API Integration'],
    features: [
      'Property Listings',
      'Advanced Search',
      'User Dashboard',
      'Mobile Responsive'
    ],
    liveDemo: '#',
    github: '#',
    gradient: 'from-purple-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Personal portfolio with 3D animations and interactive elements.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    technologies: ['Three.js', 'GSAP', 'HTML5'],
    features: [
      '3D Animations',
      'Dark/Light Mode',
      'Smooth Scrolling',
      'SEO Optimized'
    ],
    liveDemo: '#',
    github: '#',
    gradient: 'from-cyan-500 to-blue-500'
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in frontend development and modern web technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card h-80">
              <div className="project-card-inner">
                <div className="project-card-front bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-t-xl"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className={`px-2 py-1 text-xs rounded ${
                            index % 3 === 0 ? 'bg-blue-500/10 text-blue-500' :
                            index % 3 === 1 ? 'bg-purple-500/10 text-purple-500' :
                            'bg-cyan-500/10 text-cyan-500'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`project-card-back bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-center text-white`}>
                  <h3 className="text-2xl font-bold mb-4">{project.title} Features</h3>
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <i className="fas fa-check mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveDemo}
                      className="flex-1 bg-white/20 hover:bg-white/30 py-2 px-4 rounded-lg text-center transition-colors"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                    </a>
                    <a 
                      href={project.github}
                      className="flex-1 bg-white/20 hover:bg-white/30 py-2 px-4 rounded-lg text-center transition-colors"
                    >
                      <i className="fab fa-github mr-2"></i>GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <i className="fab fa-github mr-2"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
