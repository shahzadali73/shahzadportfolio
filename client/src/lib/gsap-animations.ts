declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export class GSAPAnimations {
  static init() {
    if (!window.gsap || !window.ScrollTrigger) {
      console.warn('GSAP or ScrollTrigger not loaded');
      return;
    }

    window.gsap.registerPlugin(window.ScrollTrigger);
    this.setupAnimations();
  }

  private static setupAnimations() {
    // Hero section animation
    window.gsap.from(".animate-fadeInUp", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power2.out",
      delay: 0.5
    });

    // Section animations
    const sections = document.querySelectorAll("section");
    sections.forEach((section, i) => {
      if (i === 0) return; // Skip hero section

      const children = Array.from(section.children);
      if (children.length > 0) {
        window.gsap.from(children, {
          duration: 0.8,
          y: 60,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });
      }
    });

    // Skill bars animation
    this.animateSkillBars();

    // Parallax effect for hero section
    const heroElement = document.querySelector("#home");
    if (heroElement) {
      window.gsap.to(".animate-float", {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }
  }

  static animateSkillBars() {
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

  static refresh() {
    if (window.ScrollTrigger) {
      window.ScrollTrigger.refresh();
    }
  }
}
