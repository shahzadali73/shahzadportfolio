const certifications = [
  'Responsive Web Design',
  'Front-End Web Development', 
  'HTML/CSS/JS for Web Developers',
  'React – The Complete Guide'
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-slate-100 dark:bg-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Degree */}
          <div className="education-card bg-white dark:bg-slate-900 p-8 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-graduation-cap text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">Bachelor in Computer Application</h3>
                <p className="text-slate-600 dark:text-slate-400">Pursuing (2023 - 2026)</p>
              </div>
            </div>
            <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Shekhawati Group of Institutions
            </h4>
            <p className="text-slate-600 dark:text-slate-400">
              Currently pursuing comprehensive computer application degree with focus on software development, 
              programming languages, and modern web technologies.
            </p>
          </div>
          
          {/* Course */}
          <div className="education-card bg-white dark:bg-slate-900 p-8 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-laptop-code text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">Frontend Development</h3>
                <p className="text-slate-600 dark:text-slate-400">June 2024 - Dec 2024</p>
              </div>
            </div>
            <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Digitally Code
            </h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li className="flex items-start">
                <i className="fas fa-check text-purple-500 mr-2 mt-1"></i>
                Built multiple responsive web pages following industry best practices
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-purple-500 mr-2 mt-1"></i>
                Practiced responsive design techniques using Flexbox and CSS Grid
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-purple-500 mr-2 mt-1"></i>
                Developed mini-projects using modern JavaScript and React.js
              </li>
            </ul>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((certification, index) => (
              <div key={index} className="certification-card bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg text-center border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                <i className={`fas fa-certificate text-3xl mb-3 ${
                  index % 4 === 0 ? 'text-blue-500' : 
                  index % 4 === 1 ? 'text-purple-500' : 
                  index % 4 === 2 ? 'text-cyan-500' : 'text-blue-500'
                }`}></i>
                <h4 className="font-semibold mb-2">{certification}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
