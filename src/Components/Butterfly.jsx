import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Butterfly() {
  const ref = useRef(null);

  useEffect(() => {
    const bf = ref.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      bf.style.display = "none";
      return;
    }

    const wl = bf.querySelector(".wl");
    const wr = bf.querySelector(".wr");
    gsap.set(wl, { transformOrigin: "100% 50%" });
    gsap.set(wr, { transformOrigin: "0% 50%" });

    const flap = gsap.timeline({ repeat: -1, yoyo: true });
    flap.to([wl, wr], { scaleX: 0.2, duration: 0.14, ease: "sine.inOut" });

    const P = { x: -60, y: window.innerHeight * 0.3, r: 0 };
    const T = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.4 };
    let last = 0;

    const onMove = (e) => {
      T.x = e.clientX + 26;
      T.y = e.clientY + 26;
      last = Date.now();
    };
    window.addEventListener("pointermove", onMove);

    const tick = (time) => {
      // Mouse na ho (ya mobile) to khud ghoomti hai
      if (Date.now() - last > 2500) {
        T.x = window.innerWidth * (0.5 + 0.38 * Math.sin(time * 0.45));
        T.y = window.innerHeight * (0.45 + 0.3 * Math.sin(time * 0.7 + 1));
      }
      const dx = T.x - P.x;
      const dy = T.y - P.y;
      P.x += dx * 0.06;
      P.y += dy * 0.06 + Math.sin(time * 6) * 0.6;
      const sp = Math.hypot(dx, dy) * 0.06;
      if (sp > 0.4) {
        const a = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
        P.r += (((a - P.r + 540) % 360) - 180) * 0.08;
      }
      gsap.set(bf, { x: P.x, y: P.y, rotation: P.r });
      flap.timeScale(0.7 + Math.min(sp, 12) * 0.25);
    };
    gsap.ticker.add(tick);

    // Cleanup (component hatne par)
    return () => {
      window.removeEventListener("pointermove", onMove);
      gsap.ticker.remove(tick);
      flap.kill();
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 54,
        height: 42,
        margin: "-21px 0 0 -27px",
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
      }}
    >
      <svg viewBox="0 0 80 60" width="100%" height="100%" style={{ overflow: "visible" }}>
        <g className="wl">
          <path d="M40 28C28 4 6 2 3 14c-2 12 12 20 37 18z" fill="#f0463a" stroke="#17301f" strokeWidth="1.5" />
          <path d="M40 33C26 34 12 44 20 54c8 8 18-6 20-21z" fill="#d97a3a" stroke="#17301f" strokeWidth="1.5" />
          <circle cx="16" cy="15" r="4" fill="#fff" opacity=".7" />
        </g>
        <g className="wr">
          <path d="M40 28C52 4 74 2 77 14c2 12-12 20-37 18z" fill="#f0463a" stroke="#17301f" strokeWidth="1.5" />
          <path d="M40 33C54 34 68 44 60 54c-8 8-18-6-20-21z" fill="#d98a3a" stroke="#17301f" strokeWidth="1.5" />
          <circle cx="64" cy="15" r="4" fill="#fff" opacity=".7" />
        </g>
        <ellipse cx="40" cy="30" rx="3" ry="15" fill="#17301f" />
        <path d="M38 16C35 8 32 5 30 4M42 16C45 8 48 5 50 4" stroke="#17301f" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}





