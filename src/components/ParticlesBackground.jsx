import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = ({ id = "tsparticles" }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: ["grab", "attract"],
          },
          onClick: { enable: false },
        },
        modes: {
          grab: {
            distance: 100,
            links: { opacity: 1 },
          },
          attract: {
            distance: 100,
            duration: 0.4,
            easing: "ease-out-quad",
            factor: 1,
            maxSpeed: 50,
            speed: 1,
          },
        },
      },
      particles: {
        color: {
          value: ["#00f0ff", "#bd00ff"],
        },
        links: {
          enable: true,
          distance: 100,
          color: "#00f0ff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "bounce", 
          },
        },
        number: {
          value: 120,
          density: { enable: true, area: 800 },
        },
        opacity: { value: 0.6 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
    }),
    []
  );

  const gridStyle = {
    backgroundColor: "#050510",
    backgroundImage: `
      linear-gradient(rgba(0, 240, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 240, 255, 0.05) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px",
  };

  if (!init) return null;

  return (
    <div style={gridStyle} className="absolute inset-0 z-0">
      <Particles 
        id={id} 
        options={options} 
        className="h-full w-full blur-[1px] contrast-125 saturate-150" 
      />
    </div>
  );
};

export default ParticlesBackground;