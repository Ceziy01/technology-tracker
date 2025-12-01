import { useEffect, useRef } from "react";
import "../styles/Face.css";

function Face({ color }) {
  const faceRef = useRef(null);
  const eyeRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const face = faceRef.current;
      const eyes = eyeRefs.current.filter(Boolean); // убираем null

      // Если DOM ещё не готов — выходим
      if (!face || eyes.length === 0) return;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // === Движение зрачков ===
      eyes.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const dx = mouseX - eyeX;
        const dy = mouseY - eyeY;
        const angle = Math.atan2(dy, dx);

        const pupil = eye.querySelector(".pupil");
        const x = Math.cos(angle) * 10;
        const y = Math.sin(angle) * 10;

        if (pupil) {
          pupil.style.transform =
            `translate(-50%, -50%) translate(${x}px, ${y}px)`;
        }
      });

      // === Наклон лица ===
      const faceRect = face.getBoundingClientRect();
      const faceX = faceRect.left + faceRect.width / 2;

      const dx = mouseX - faceX;

      const angle = (Math.atan2(0, dx) * 180) / Math.PI / 10;

      face.style.transform = `skewX(${angle}deg)`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={faceRef}
      className="face"
      style={{ background: color }}
    >
      {[0, 1].map((_, i) => (
        <div
          key={i}
          className="eye"
          ref={(el) => (eyeRefs.current[i] = el)}
        >
          <div className="pupil"></div>
        </div>
      ))}
    </div>
  );
}

export default Face;