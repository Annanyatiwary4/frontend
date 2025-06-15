"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFadeIn = ({ children, yOffset = 40, duration = 1 }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapperRef.current,
        { autoAlpha: 0, y: yOffset },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, [yOffset, duration]);

  return (
    <div ref={wrapperRef} className="opacity-0">
      {children}
    </div>
  );
};

export default ScrollFadeIn;
