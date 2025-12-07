import { useEffect, useState } from "react";

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 blur-xl mix-blend-screen overflow-hidden"
      style={{
        background: `radial-gradient(circle 60px at ${position.x}px ${position.y}px, 
          rgba(37, 99, 235, 1) 0%,
          rgba(147, 51, 234, 0.8) 45%,
          rgba(236, 72, 153, 0.5) 80%,
          transparent 100%
        )`,
      }}
    ></div>
  );
};

export default MouseGlow;