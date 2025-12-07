import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 1. FADE UP: Standard elegant reveal (moves up 50px)
export const FadeUp = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: ref });
  return <div ref={ref} className="w-full will-change-transform">{children}</div>;
};

// 2. SLIDE IN: Comes from Left or Right
export const SlideIn = ({ children, direction = "left", delay = 0 }) => {
  const ref = useRef(null);
  useGSAP(() => {
    const xOffset = direction === "left" ? -100 : 100;
    gsap.fromTo(
      ref.current,
      { x: xOffset, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: ref });
  return <div ref={ref} className="w-full will-change-transform">{children}</div>;
};

// 3. SCALE IN: Popping effect
export const ScaleIn = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.0,
        delay: delay,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: ref });
  return <div ref={ref} className="w-full will-change-transform">{children}</div>;
};