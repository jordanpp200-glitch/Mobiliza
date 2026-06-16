import { useEffect, useRef } from "react";

export default function LightningBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();

    window.addEventListener("resize", resize);

    const bolts = [];

    function createBolt(x, y) {
      const points = [];

      let currentX = x;
      let currentY = y;

      points.push({
        x: currentX,
        y: currentY,
      });

      const segments = 40 + Math.floor(Math.random() * 15);

      for (let i = 0; i < segments; i++) {
        currentX += (Math.random() - 0.5) * 70;
        currentY += (Math.random() - 0.5) * 70;

        points.push({
          x: currentX,
          y: currentY,
        });
      }

      bolts.push({
        points,
        life: 1,
      });
    }

    let lastMove = 0;

    function mouseMove(e) {
      const now = Date.now();

      if (now - lastMove < 40) return;

      lastMove = now;

      createBolt(
        e.clientX,
        e.clientY
      );
    }

    window.addEventListener(
      "mousemove",
      mouseMove
    );

    function drawBolt(bolt) {
      ctx.beginPath();

      ctx.moveTo(
        bolt.points[0].x,
        bolt.points[0].y
      );

      bolt.points.forEach((p) => {
        ctx.lineTo(p.x, p.y);
      });

      ctx.strokeStyle =
        `rgba(255,215,0,${bolt.life})`;

      ctx.lineWidth = 4;

      ctx.shadowColor = "#FFD700";
      ctx.shadowBlur = 40;

      ctx.stroke();

      // núcleo branco
      ctx.beginPath();

      ctx.moveTo(
        bolt.points[0].x,
        bolt.points[0].y
      );

      bolt.points.forEach((p) => {
        ctx.lineTo(p.x, p.y);
      });

      ctx.strokeStyle =
        `rgba(255,255,255,${
          bolt.life * 0.9
        })`;

      ctx.lineWidth = 1.5;

      ctx.shadowBlur = 15;

      ctx.stroke();

      // ramificações
      bolt.points.forEach((p, index) => {
        if (
          index % 4 === 0 &&
          Math.random() > 0.5
        ) {
          ctx.beginPath();

          ctx.moveTo(
            p.x,
            p.y
          );

          ctx.lineTo(
            p.x +
              (Math.random() - 0.5) *
                120,
            p.y +
              (Math.random() - 0.5) *
                120
          );

          ctx.strokeStyle =
            `rgba(255,255,180,${
              bolt.life * 0.6
            })`;

          ctx.lineWidth = 2;

          ctx.shadowBlur = 20;

          ctx.stroke();
        }
      });
    }

    function animate() {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      for (
        let i = bolts.length - 1;
        i >= 0;
        i--
      ) {
        drawBolt(bolts[i]);

        bolts[i].life -= 0.01;

        if (bolts[i].life <= 0) {
          bolts.splice(i, 1);
        }
      }

      requestAnimationFrame(
        animate
      );
    }

    animate();

    return () => {
      window.removeEventListener(
        "mousemove",
        mouseMove
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="lightning-canvas"
    />
  );
}