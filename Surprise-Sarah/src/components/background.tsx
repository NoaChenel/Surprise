import { useEffect, useRef } from "react";

import '@styles/background.css'

type Emoji = {
    x: number;
    y: number;
    vy: number;
    vx: number;
    size: number;
    emoji: string;
    opacity: number;
    drift: number;
};

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const emojisRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const emojiContainer = emojisRef.current;

        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: P[] = [];
        let emojis: Emoji[] = [];
        let raf: number;

        const EMOJIS = ["❤️", "💖", "💗", "✨", "⭐", "💫", "💕"];

        // ===================== RESIZE =====================
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // ===================== PARTICLES =====================
        class P {
            x = 0;
            y = 0;
            vx = 0;
            vy = 0;
            size = 0;
            alpha = 0;
            color = "255,255,255";

            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * window.innerWidth;
                this.y = Math.random() * window.innerHeight;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = -Math.random() * 0.5 - 0.1;
                this.size = Math.random() * 2 + 0.5;
                this.alpha = Math.random() * 0.5 + 0.1;
                this.color =
                    Math.random() > 0.5 ? "249,168,201" : "201,160,217";
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.alpha -= 0.002;
                if (this.alpha <= 0 || this.y < -10) this.reset();
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = `rgb(${this.color})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        // ===================== EMOJIS =====================
        const createEmoji = (): Emoji => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            // FIX: vx n'est plus accumulé — le drift sinusoïdal suffit
            vx: 0,
            vy: -Math.random() * 0.6 - 0.2,
            size: Math.random() * 18 + 12,
            emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
            opacity: Math.random() * 0.6 + 0.2,
            drift: Math.random() * Math.PI * 2, // phase aléatoire
        });

        // FIX: retourne une valeur cohérente sur desktop (20 au lieu de 10)
        const getEmojiCount = () => {
            if (window.innerWidth < 600) return 8;
            if (window.innerWidth < 1024) return 13;
            return 10;
        };

        const init = () => {
            particles = Array.from({ length: 120 }, () => new P());
            emojis = Array.from({ length: getEmojiCount() }, () => createEmoji());
        };

        const updateEmojis = () => {
            emojis.forEach((e) => {
                // FIX: oscillation bornée avec sin(temps + phase) — plus de drift infini
                e.x += Math.sin(Date.now() * 0.001 + e.drift) * 0.4;
                e.y += e.vy;

                if (e.y < -50) {
                    e.x = Math.random() * window.innerWidth;
                    e.y = window.innerHeight + 50;
                    e.emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
                }
            });
        };

        const drawEmojis = () => {
            if (!emojiContainer) return;

            emojis.forEach((e, i) => {
                let span = emojiContainer.children[i] as HTMLSpanElement;

                if (!span) {
                    span = document.createElement("span");
                    span.style.position = "absolute";
                    span.style.transform = "translate(-50%, -50%)";
                    span.style.pointerEvents = "none";
                    span.style.userSelect = "none";
                    span.style.filter =
                        "drop-shadow(0 0 10px rgba(255,255,255,0.2))";
                    emojiContainer.appendChild(span);
                }

                span.textContent = e.emoji;
                span.style.left = `${e.x}px`;
                span.style.top = `${e.y}px`;
                span.style.fontSize = `${e.size}px`;
                span.style.opacity = `${e.opacity}`;
            });
        };

        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                p.update();
                p.draw(ctx);
            });

            updateEmojis();
            drawEmojis();

            raf = requestAnimationFrame(animate);
        };

        resize();
        init();
        animate();

        // FIX: le resize recrée les emojis au bon nombre et nettoie les anciens spans
        const handleResize = () => {
            resize();
            emojis = Array.from(
                { length: getEmojiCount() },
                () => createEmoji()
            );
            if (emojiContainer) emojiContainer.innerHTML = "";
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(raf);
            // FIX: nettoyage des spans DOM au unmount
            if (emojiContainer) emojiContainer.innerHTML = "";
        };
    }, []);

    return (
        <>
            <div className="bg-gradient" />
            <canvas ref={canvasRef} className="particles" />
            <div ref={emojisRef} className="emoji-layer" />
        </>
    );
}