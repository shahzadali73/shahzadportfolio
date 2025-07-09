export function AboutSection() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/shahzad-ali-cv.pdf';
    link.download = 'Shahzad_Ali_Frontend_Developer_CV.pdf';
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">Professional Summary</h3>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Enthusiastic and detail-oriented Frontend Web Developer with strong skills in HTML, CSS, JavaScript, and React.js. 
              Experienced in building responsive, user-friendly web interfaces and committed to continuous learning.
            </p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Proven ability to contribute to dynamic development teams and deliver clean, efficient code. 
              Currently pursuing Bachelor in Computer Application while working as a Frontend Developer Intern at DQOT Solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium">React.js</span>
              <span className="px-4 py-2 bg-purple-500/10 text-purple-500 rounded-full text-sm font-medium">JavaScript ES6+</span>
              <span className="px-4 py-2 bg-cyan-500/10 text-cyan-500 rounded-full text-sm font-medium">Responsive Design</span>
              <span className="px-4 py-2 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium">Tailwind CSS</span>
            </div>
            
            <div className="pt-6">
              <button 
                onClick={handleDownloadCV}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <i className="fas fa-download mr-2"></i>
                Download CV
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                alt="Shahzad Ali - Frontend Developer" 
                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl animate-float"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 right-10 w-16 h-16 bg-blue-500/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-10 left-10 w-12 h-12 bg-purple-500/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 right-0 w-8 h-8 bg-cyan-500/20 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
