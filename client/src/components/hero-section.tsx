export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fadeInUp">
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-bold gradient-text animate-float">
              Shahzad Ali
            </h2>
            <p className="text-2xl md:text-3xl font-light text-slate-600 dark:text-slate-300">
              Frontend Developer
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-glow"></div>
          </div>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed">
            Crafting beautiful, responsive web experiences with modern technologies. 
            Passionate about clean code and exceptional user interfaces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 mt-12">
            <a 
              href="mailto:kshahzadali73@gmail.com" 
              className="p-4 glass-effect rounded-full hover:scale-110 transition-transform group"
            >
              <i className="fas fa-envelope text-2xl group-hover:text-blue-500 transition-colors"></i>
            </a>
            <a 
              href="tel:+91-7844073786" 
              className="p-4 glass-effect rounded-full hover:scale-110 transition-transform group"
            >
              <i className="fas fa-phone text-2xl group-hover:text-blue-500 transition-colors"></i>
            </a>
            <a 
              href="#" 
              className="p-4 glass-effect rounded-full hover:scale-110 transition-transform group"
            >
              <i className="fab fa-github text-2xl group-hover:text-blue-500 transition-colors"></i>
            </a>
            <a 
              href="#" 
              className="p-4 glass-effect rounded-full hover:scale-110 transition-transform group"
            >
              <i className="fab fa-linkedin text-2xl group-hover:text-blue-500 transition-colors"></i>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-2xl text-blue-500"></i>
      </div>
    </section>
  );
}
