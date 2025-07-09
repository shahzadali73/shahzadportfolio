import { useEffect } from 'react';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript ES6+', level: 85 },
      { name: 'React.js', level: 80 },
    ]
  },
  {
    category: 'Frameworks & Tools',
    skills: [
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Git & GitHub', level: 80 },
      { name: 'TypeScript', level: 60 },
    ]
  },
  {
    category: 'Design & Responsive',
    skills: [
      { name: 'Responsive Design', level: 95 },
      { name: 'Flexbox', level: 90 },
      { name: 'CSS Grid', level: 85 },
      { name: 'Figma (UI/UX)', level: 70 },
    ]
  }
];

export function SkillsSection() {
  useEffect(() => {
    // Trigger animation when component mounts
    setTimeout(() => {
      if (window.gsap) {
        const skillBars = document.querySelectorAll(".skill-progress");
        skillBars.forEach((bar) => {
          const skillValue = bar.getAttribute('data-skill');
          if (skillValue) {
            window.gsap.to(bar, {
              width: skillValue + '%',
              duration: 2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: bar,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            });
          }
        });
      }
    }, 100);
  }, []);

  return (
    <section id="skills" className="py-20 bg-slate-100 dark:bg-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category space-y-6">
              <h3 className="text-2xl font-semibold text-center mb-6">{category.category}</h3>
              
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="skill-bar h-3 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div 
                      className="skill-progress rounded-full h-full" 
                      data-skill={skill.level}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
