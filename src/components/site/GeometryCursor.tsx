import { useEffect, useRef } from "react";

interface TrailPoint {
  x: number;
  y: number;
  angle: number;
  speed: number;
  alpha: number;
}

interface ClickBurst {
  x: number;
  y: number;
  radius: number;
  alpha: number;
}

export function GeometryCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Only activate on fine pointer devices (Desktop / Mouse)
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = -1000;
    let mouseY = -1000;
    let prevMouseX = -1000;
    let prevMouseY = -1000;
    let smoothX = -1000;
    let smoothY = -1000;
    let isVisible = false;
    let rotationAngle = 0;
    let moveAngle = 0;
    let speed = 0;

    const trail: TrailPoint[] = [];
    const bursts: ClickBurst[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      prevMouseX = mouseX;
      prevMouseY = mouseY;
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        smoothX = mouseX;
        smoothY = mouseY;
      }

      // Calculate instantaneous movement vector & angle
      const dx = mouseX - prevMouseX;
      const dy = mouseY - prevMouseY;
      speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 1) {
        moveAngle = Math.atan2(dy, dx);
        trail.unshift({
          x: mouseX,
          y: mouseY,
          angle: moveAngle,
          speed,
          alpha: 1.0,
        });

        if (trail.length > 12) {
          trail.pop();
        }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      bursts.push({
        x: e.clientX,
        y: e.clientY,
        radius: 10,
        alpha: 1.0,
      });
    };

    const handleMouseLeave = () => {
      isVisible = false;
    };

    const handleMouseEnter = () => {
      isVisible = true;
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rotationAngle += 0.008;

      if (isVisible && mouseX > 0 && mouseY > 0) {
        smoothX = lerp(smoothX, mouseX, 0.35);
        smoothY = lerp(smoothY, mouseY, 0.35);

        // 1. Draw Extended CAD Projection Crosshair Axes
        ctx.beginPath();
        ctx.setLineDash([4, 4]);
        ctx.moveTo(0, smoothY);
        ctx.lineTo(canvas.width, smoothY);
        ctx.moveTo(smoothX, 0);
        ctx.lineTo(smoothX, canvas.height);
        ctx.strokeStyle = "rgba(0, 102, 204, 0.18)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.setLineDash([]);

        // 2. Draw Trailing Geometric Vector Rays & Right-Angle Triangles
        for (let i = 0; i < trail.length - 1; i++) {
          const pt1 = trail[i];
          const pt2 = trail[i + 1];

          if (!pt1 || !pt2) continue;

          pt1.alpha *= 0.88;

          if (pt1.alpha > 0.05) {
            // Trailing CAD triangle vector
            ctx.beginPath();
            ctx.moveTo(pt1.x, pt1.y);
            ctx.lineTo(pt2.x, pt1.y);
            ctx.lineTo(pt2.x, pt2.y);
            ctx.closePath();

            ctx.fillStyle = `rgba(0, 180, 216, ${pt1.alpha * 0.08})`;
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(pt1.x, pt1.y);
            ctx.lineTo(pt2.x, pt2.y);
            ctx.strokeStyle = `rgba(0, 102, 204, ${pt1.alpha * 0.4})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }

        // 3. Draw Rotating Geometric Protractor Wheel around Cursor
        const mainRadius = 46;
        ctx.beginPath();
        ctx.arc(smoothX, smoothY, mainRadius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0, 102, 204, 0.55)";
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Inner compass ring
        ctx.beginPath();
        ctx.arc(smoothX, smoothY, mainRadius - 10, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(56, 189, 248, 0.35)";
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // 12 Degree Angle Ticks & Radial Rays
        const angleStep = Math.PI / 6; // 30 degree increments
        for (let a = 0; a < Math.PI * 2; a += angleStep) {
          const currentA = a + rotationAngle;
          const innerR = mainRadius - (a % (Math.PI / 2) === 0 ? 10 : 5);
          const outerR = mainRadius + (a % (Math.PI / 2) === 0 ? 5 : 2);

          const x1 = smoothX + Math.cos(currentA) * innerR;
          const y1 = smoothY + Math.sin(currentA) * innerR;
          const x2 = smoothX + Math.cos(currentA) * outerR;
          const y2 = smoothY + Math.sin(currentA) * outerR;

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle =
            a % (Math.PI / 2) === 0 ? "rgba(0, 102, 204, 0.8)" : "rgba(56, 189, 248, 0.5)";
          ctx.lineWidth = a % (Math.PI / 2) === 0 ? 1.5 : 1;
          ctx.stroke();
        }

        // 4. Live Movement Angle Indicator & Degree Badges
        const deg = ((((moveAngle * 180) / Math.PI) + 360) % 360).toFixed(1);
        const arcRadius = 32;

        // Angle Arc Sector
        ctx.beginPath();
        ctx.arc(smoothX, smoothY, arcRadius, 0, moveAngle);
        ctx.strokeStyle = "rgba(0, 180, 216, 0.75)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Live CAD Angle Degree Badge Text
        const textAngle = moveAngle / 2;
        const badgeX = smoothX + Math.cos(textAngle) * 62;
        const badgeY = smoothY + Math.sin(textAngle) * 62;

        // Background badge pill for maximum visibility
        ctx.fillStyle = "rgba(11, 19, 43, 0.85)";
        ctx.beginPath();
        ctx.roundRect(badgeX - 4, badgeY - 12, 68, 18, 4);
        ctx.fill();
        ctx.strokeStyle = "rgba(0, 180, 216, 0.6)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.font = "11px 'IBM Plex Mono', monospace";
        ctx.fillStyle = "#38bdf8";
        ctx.fillText(`∠ ${deg}°`, badgeX + 2, badgeY + 1);

        // Coordinate Badge near bottom left of cursor
        const coordX = Math.round(smoothX);
        const coordY = Math.round(smoothY);
        ctx.fillStyle = "rgba(11, 19, 43, 0.85)";
        ctx.beginPath();
        ctx.roundRect(smoothX + 18, smoothY + 22, 104, 18, 4);
        ctx.fill();
        ctx.strokeStyle = "rgba(0, 102, 204, 0.4)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.font = "10px 'IBM Plex Mono', monospace";
        ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
        ctx.fillText(`X:${coordX} Y:${coordY}`, smoothX + 24, smoothY + 34);

        // Central Target Crosshair Point
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#00b4d8";
        ctx.fill();
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // 5. Draw Click Geometric Octagon Bursts
      for (let i = bursts.length - 1; i >= 0; i--) {
        const b = bursts[i];
        if (!b) continue;

        b.radius += 3.5;
        b.alpha *= 0.92;

        if (b.alpha <= 0.02) {
          bursts.splice(i, 1);
          continue;
        }

        // Geometric Octagon
        ctx.beginPath();
        const sides = 8;
        for (let s = 0; s < sides; s++) {
          const a = (s * Math.PI * 2) / sides;
          const px = b.x + Math.cos(a) * b.radius;
          const py = b.y + Math.sin(a) * b.radius;
          if (s === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(0, 180, 216, ${b.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden"
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
