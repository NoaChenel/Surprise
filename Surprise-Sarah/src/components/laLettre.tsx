import { useEffect, useRef } from "react";
import "@styles/lettre.css";

const S = ({ children, color = "pink" }: { children: string; color?: "pink" | "purple" | "gold" | "teal" }) => (
    <span className={`lettre-shine lettre-shine--${color}`}>{children}</span>
);

const CYCLING_WORDS = [" d'être qui tu es", " pour ton sourire", " pour ta douceur", " pour ta force", "pour ton âme"];

function TypewriterCycle() {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;
        let timeout: ReturnType<typeof setTimeout>;

        const tick = () => {
            const word = CYCLING_WORDS[wordIndex];
            const el = ref.current;
            if (!el) return;

            if (!deleting) {
                charIndex++;
                el.textContent = word.slice(0, charIndex);
                if (charIndex === word.length) {
                    deleting = true;
                    timeout = setTimeout(tick, 1800);
                    return;
                }
                timeout = setTimeout(tick, 60);
            } else {
                charIndex--;
                el.textContent = word.slice(0, charIndex);
                if (charIndex === 0) {
                    deleting = false;
                    wordIndex = (wordIndex + 1) % CYCLING_WORDS.length;
                    timeout = setTimeout(tick, 300);
                    return;
                }
                timeout = setTimeout(tick, 35);
            }
        };

        timeout = setTimeout(tick, 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <span className="lettre-typewriter">
            <span ref={ref} />
            <span className="lettre-cursor">|</span>
        </span>
    );
}

function RevealParagraph({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const check = () => {
            const rect = el.getBoundingClientRect();
            console.log("scroll détecté, rect.top:", rect.top, "innerHeight:", window.innerHeight);
            if (rect.top < window.innerHeight - 50) {
                setTimeout(() => el.classList.add("lettre-visible"), delay);
                document.removeEventListener("scroll", check);
            }
        };

        check();
        document.addEventListener("scroll", check, { passive: true });
        window.addEventListener("scroll", check, { passive: true });
        return () => document.removeEventListener("scroll", check);
    }, [delay]);

    return (
        <p ref={ref} className="lettre-reveal">
            {children}
        </p>
    );
}

export default function Lettre() {
    return (
        <div className="lettre-root">
            <article className="lettre-card">
                <h2 className="lettre-titre">Quelques mots à mon cœur</h2>

                <RevealParagraph>
                    Je ne vais pas commencer cette lettre comme on a l'habitude de le voir en disant que je ne sais
                    pas par où commencer, parce que moi, je sais exactement ce que je veux te dire en premier :{" "}
                    <S color="gold">merci</S>.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Oui, <S color="gold">merci</S>. Merci <TypewriterCycle />, merci de me montrer chaque jour
                    que tu <S color="pink">tiens à moi</S>, merci de me faire <S color="purple">confiance</S>, merci
                    de me <S color="pink">complimenter</S> dès que tu en as l'occasion, merci de me faire sentir{" "}
                    <S color="gold">unique</S>. En fait, simplement merci de <S color="pink">m'aimer</S>.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    J'aurais pu continuer à te remercier pendant des pages entières, mais je me suis dit que ça
                    finirait par être une lettre un peu longue.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Je veux surtout que tu saches une chose : tu me rends{" "}
                    <S color="gold">sincèrement heureux</S>. Je pense ne pas avoir été aussi heureux depuis longtemps,
                    et ça, c'est <S color="pink">grâce à toi</S>, mon cœur.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Tu es une fille <S color="purple">incroyable</S>. J'aime tout chez toi : tes yeux, ton nez, ta
                    bouche, tes cheveux, ton odeur, tes cuisses, ton petit bidou, ton cul et, bien évidemment, tes
                    seins ! Mais ce que j'aime chez toi va bien{" "}
                    <S color="pink">au-delà de ton physique</S>.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Tu es la personne qui me fait le plus <S color="gold">rire</S>. Je n'ai jamais autant rigolé avec
                    quelqu'un. J'aime <S color="pink">la personne que tu es</S>, ce que tu représentes, tes{" "}
                    <S color="purple">valeurs</S>, tes convictions, ta façon de penser et ta manière de voir{" "}
                    <S color="teal">l'avenir</S>.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    En parlant d'avenir, moi, plus tard, je me vois{" "}
                    <S color="pink">vivre avec toi</S> (au moins pendant 21 ans ^^). Et ce n'est même pas seulement
                    que je m'en fais l'image : je me <S color="purple">projette réellement</S> avec toi.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Je nous imagine dans une vieille maison au milieu de nulle part, près de{" "}
                    <S color="teal">la mer</S>, avec une grande piscine. Je nous vois avec un potager dont tu seras
                    l'unique responsable, un chien, plein de chats, des biquettes et des poules. Et bien sûr,{" "}
                    <S color="gold">notre van</S> pour faire le tour du monde ensemble. Tu reconnais ? C'est
                    exactement notre discussion de l'autre fois ^^
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Je crois que tu n'imagines pas tout le <S color="gold">bonheur</S> que tu apportes à mon
                    quotidien.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Tous ces <S color="pink">petits moments</S> qu'on passe ensemble, qui passent toujours beaucoup
                    trop vite d'ailleurs. Quand tu m'apprends des choses, quand tu me montres ce que tu aimes ou que
                    tu me partages tes passions comme pour le <S color="purple">crochet</S> par exemple !! J'aime
                    tellement quand tu prends le temps de <S color="pink">m'écouter</S>, quand tu essaies de
                    comprendre mes jeux, quand tu essaies même d'y jouer, quand tu t'intéresses à mes projets ou
                    quand tu m'écoutes parler de tout ce qui me passionne ou même quand tu m'aides pour{" "}
                    <S color="teal">l'alternance</S>.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Toutes ces petites choses peuvent sembler anodines, mais elles{" "}
                    <S color="gold">comptent énormément</S> pour moi. Elles signifient tellement que je ne pouvais
                    pas écrire cette lettre sans te remercier d'être{" "}
                    <S color="pink">présente dans ma vie</S> depuis maintenant plus de deux mois.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Merci d'être cette personne que tu es. <S color="purple">Ne change jamais</S>. À mes yeux, tu es{" "}
                    <S color="gold">parfaite</S>.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    <span className="lettre-final">
                        <S color="pink">Joyeux anniversaire, mon amour.</S> Profite pleinement de cette magnifique
                        journée.
                    </span>
                </RevealParagraph>

                <RevealParagraph delay={200}>
                    <span className="lettre-je-taime">
                        <S color="gold">Je t'aime.</S>
                    </span>
                </RevealParagraph>

                <p className="lettre-signature">Ton amoureux 💕</p>
            </article>
        </div>
    );
}