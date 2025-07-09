export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden md:block"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {/* Current Position */}
            <div className="experience-item flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">Current</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Frontend Developer Intern</h3>
                  <h4 className="text-lg font-semibold text-slate-600 dark:text-slate-400 mb-2">DQOT Solutions</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">Jan 2025 – Present</p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start">
                      <i className="fas fa-check text-blue-500 mr-2 mt-1"></i>
                      Assisted in building responsive user interfaces using HTML, CSS, and JavaScript
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-blue-500 mr-2 mt-1"></i>
                      Contributed to React.js-based Web Design by developing reusable components
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-blue-500 mr-2 mt-1"></i>
                      Collaborated with design team to implement responsive design principles
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-blue-500 mr-2 mt-1"></i>
                      Conducted cross-browser testing and resolved UI bugs
                    </li>
                  </ul>
                  <div className="mt-4">
                    <span className="text-sm font-medium text-purple-500">Projects: Restorn & Mymakaan</span>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:flex w-16 h-16 bg-blue-500 rounded-full items-center justify-center relative z-10 shadow-xl">
                <i className="fas fa-code text-white text-xl"></i>
              </div>
              
              <div className="md:w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
