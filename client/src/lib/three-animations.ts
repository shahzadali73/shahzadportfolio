declare global {
  interface Window {
    THREE: any;
  }
}

export class ThreeBackground {
  private scene: any;
  private camera: any;
  private renderer: any;
  private particles: any;
  private animationId: number | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.init(canvas);
  }

  private init(canvas: HTMLCanvasElement) {
    // Scene setup
    this.scene = new window.THREE.Scene();
    this.camera = new window.THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new window.THREE.WebGLRenderer({ 
      canvas, 
      alpha: true,
      antialias: true 
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create particles
    this.createParticles();

    // Position camera
    this.camera.position.z = 20;

    // Start animation
    this.animate();

    // Handle resize
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  private createParticles() {
    const particlesGeometry = new window.THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute(
      'position',
      new window.THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new window.THREE.PointsMaterial({
      size: 0.005,
      color: '#3B82F6',
      transparent: true,
      opacity: 0.8,
    });

    this.particles = new window.THREE.Points(particlesGeometry, particlesMaterial);
    this.scene.add(this.particles);
  }

  private animate() {
    this.animationId = requestAnimationFrame(this.animate.bind(this));

    if (this.particles) {
      this.particles.rotation.x += 0.0005;
      this.particles.rotation.y += 0.0005;
    }

    this.renderer.render(this.scene, this.camera);
  }

  private handleResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  public destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    window.removeEventListener('resize', this.handleResize.bind(this));
    
    // Clean up Three.js objects
    if (this.particles) {
      this.particles.geometry.dispose();
      this.particles.material.dispose();
      this.scene.remove(this.particles);
    }
    
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}
