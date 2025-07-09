export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Shahzad Ali</h3>
            <p className="text-slate-300 mb-4">
              Frontend Developer passionate about creating exceptional web experiences 
              with modern technologies and clean code.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-blue-500 transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-500 transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="mailto:kshahzadali73@gmail.com" className="text-slate-300 hover:text-blue-500 transition-colors">
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-slate-300 hover:text-blue-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-slate-300 hover:text-blue-500 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-slate-300 hover:text-blue-500 transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-slate-300 hover:text-blue-500 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-300 hover:text-blue-500 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <i className="fas fa-envelope mr-2"></i>
                kshahzadali73@gmail.com
              </li>
              <li>
                <i className="fas fa-phone mr-2"></i>
                +91-7844073786
              </li>
              <li>
                <i className="fas fa-map-marker-alt mr-2"></i>
                India
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-300">
            &copy; 2025 Shahzad Ali. All rights reserved. Built with ❤️ and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
