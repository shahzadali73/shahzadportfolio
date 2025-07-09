import { useEffect, useRef } from 'react';
import { ThreeBackground } from '@/lib/three-animations';

export function ThreeBackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const threeBackgroundRef = useRef<ThreeBackground | null>(null);

  useEffect(() => {
    if (canvasRef.current && window.THREE) {
      threeBackgroundRef.current = new ThreeBackground(canvasRef.current);
    }

    return () => {
      if (threeBackgroundRef.current) {
        threeBackgroundRef.current.destroy();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
}
