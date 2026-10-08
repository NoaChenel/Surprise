import { useEffect, useRef } from "react";

import "@styles/lettre.css";

const S = ({
    children,
    color = "pink",
}: {
    children: React.ReactNode;
    color?: "pink" | "purple" | "gold" | "teal";
}) => (
    <span className={`lettre-shine lettre-shine--${color}`}>
        {children}
    </span>
);

function RevealParagraph({
    children,
    delay = 0,
}: {
    children: React.ReactNode;
    delay?: number;
}) {
    const ref = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const el = ref.current;

        if (!el) return;

        const check = () => {
            const rect = el.getBoundingClientRect();

            if (rect.top < window.innerHeight - 50) {
                setTimeout(
                    () => el.classList.add("lettre-visible"),
                    delay
                );

                document.removeEventListener("scroll", check);
                window.removeEventListener("scroll", check);
            }
        };

        check();

        document.addEventListener("scroll", check, {
            passive: true,
        });

        window.addEventListener("scroll", check, {
            passive: true,
        });

        return () => {
            document.removeEventListener("scroll", check);
            window.removeEventListener("scroll", check);
        };
    }, [delay]);

    return (
        <p ref={ref} className="lettre-reveal">
            {children}
        </p>
    );
}

export default function Lettre6m() {
    return (
        <div className="lettre-root">
            <article className="lettre-card">
                <h2 className="lettre-titre">
                    Déjà 6 mois !!
                </h2>

                <RevealParagraph>
                    6 mois déjà… Ça passe{" "}
                    <S color="gold">bien trop vite</S> !!!
                    Je suis tellement heureux d’avoir fait, et de
                    continuer à faire, tout ce chemin avec toi,
                    petit cœur !!
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Tu me rends{" "}
                    <S color="pink">
                        le plus heureux du monde
                    </S>
                    . Plus les jours passent, plus je le suis,
                    et plus je me rends compte que là où je veux
                    être pour le reste de ma vie, c’est{" "}
                    <S color="purple">
                        à tes côtés
                    </S>
                    .
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Je ne me vois plus du tout sans toi.{" "}
                    <S color="pink">Tu es tout pour moi.</S> Tu me
                    complètes, et j’ai l’impression d’en faire de
                    même pour toi. Je pense vraiment avoir trouvé{" "}
                    <S color="gold">mon âme sœur</S> en toi.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    J’aime la façon dont tu me regardes. Plus les
                    jours passent, plus je vois{" "}
                    <S color="pink">l’amour dans tes yeux</S>, dans
                    ce que tu fais, dans ce que tu me dis, et je
                    peux t’assurer que ça me fait tellement de
                    bien.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Avoir quelqu’un sur qui je peux compter, en qui
                    je peux avoir totalement confiance, ça m’aide
                    énormément tous les jours. Savoir que j’ai
                    quelqu’un qui m’aime pour ce que je suis, qui
                    m’accepte avec mes qualités comme mes défauts
                    et qui fait tout pour me rendre{" "}
                    <S color="gold">
                        le plus heureux du monde
                    </S>
                    , me fait tellement de bien.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    J’aime aussi la façon dont on se comprend
                    toujours, ou, si ce n’est pas forcément le cas,
                    la façon dont on prend le temps de{" "}
                    <S color="purple">
                        se comprendre
                    </S>
                    .
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Je pense que c’est grâce à cette force qu’on
                    n’a toujours pas eu notre première grosse
                    dispute mdr. D’ailleurs, je pense que si elle
                    arrive un jour, elle ne pourra pas durer très
                    longtemps (
                    <S color="pink">
                        on s’aime beaucoup trop pour ça
                    </S>
                    ).
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    J’ai quand même essayé de réfléchir à comment
                    elle pourrait arriver, et en vrai, le plus
                    probable, ce serait un jour où on serait tous
                    les deux de mauvaise humeur, où je ne
                    comprendrais pas ou ne retiendrais pas ce que
                    tu me dis, comme ça peut m’arriver assez
                    souvent, et où du coup on s’emporterait tous
                    les deux.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Pour moi c’est le scénario le plus probable de
                    notre première grosse dispute mdr.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Tu mérites tellement plus que tout ce que tu as
                    déjà eu. Je sais qu’en ce moment, ça ne va pas
                    forcément super fort, mais tu peux compter à{" "}
                    <S color="gold">100 % sur moi</S>.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Je serai là derrière toi pour t’envoyer tout
                    l’amour et toute l’aide possible, pour te
                    pousser le plus loin possible et surtout pour
                    te rappeler, dans les moments où tu doutes, à
                    quel point tu es capable de{" "}
                    <S color="pink">
                        faire des choses de fou
                    </S>{" "}
                    !!
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Je sais que tu peux largement y arriver. Il ne
                    manque plus qu’à ce que tu t’en rendes compte
                    toi-même… et je vais tout faire pour t’aider à
                    le voir.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Parce que moi, je le vois. Je vois{" "}
                    <S color="pink">la femme géniale que tu es</S>,
                    la femme belle, affreusement drôle,
                    intelligente, douée pour presque tout et
                    surtout{" "}
                    <S color="gold">
                        incroyablement importante à mes yeux
                    </S>
                    .
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Et j’espère que tu n’oublieras jamais ça : même
                    dans les moments où tu ne crois plus assez en
                    toi,{" "}
                    <S color="purple">
                        moi, je continuerai de croire en toi pour
                        deux
                    </S>{" "}
                    !!
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Bref… déjà 6 mois qu’on s’aime. 6 mois que je
                    suis{" "}
                    <S color="gold">
                        l’homme le plus heureux sur Terre
                    </S>{" "}
                    grâce à toi et à ton amour.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    6 mois de souvenirs, de moments à deux, de
                    rires, de câlins, de discussions, de petites
                    habitudes et de tout un tas de choses qui sont
                    peut-être toutes simples, mais qui sont
                    devenues tellement importantes pour moi parce
                    que je les partage avec toi.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Et quand je pense au fait que ce ne sont que les
                    6 premiers mois, ça me rend encore plus
                    heureux. Parce que je sais que j’ai encore{" "}
                    <S color="pink">
                        tellement de choses à vivre avec toi
                    </S>
                    .
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Encore tellement de souvenirs à créer, de
                    journées à passer ensemble, de voyages, de
                    fous rires, de projets, de moments simples et
                    de moments inoubliables.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Je ne sais pas exactement ce que l’avenir nous
                    réserve, mais une chose est sûre :{" "}
                    <S color="purple">
                        j’ai envie de le découvrir avec toi
                    </S>
                    .
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Alors merci pour ces 6 mois,{" "}
                    <S color="pink">
                        mon bébé d’amour
                    </S>
                    . Merci pour ton amour, ta présence, tes
                    câlins, tes mots, tes regards, tes petites
                    attentions et simplement merci d’être toi.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Merci de me laisser partager ta vie.
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    <span className="lettre-final">
                        <S color="gold">
                            Joyeux nous !!
                        </S>
                        ❤️
                    </span>
                </RevealParagraph>

                <RevealParagraph delay={100}>
                    Et surtout…{" "}
                    <S color="pink">
                        longue vie à notre amour
                    </S>
                    .
                </RevealParagraph>

                <RevealParagraph delay={200}>
                    <span className="lettre-je-taime">
                        <S color="gold">
                            Je t’aime. Plus que je ne saurais
                            vraiment l’écrire avec des mots. 
                        </S>
                        ❤️
                    </span>
                </RevealParagraph>

                <p className="lettre-signature">
                    L'homme dont toutes les femmes rêves 💕
                </p>
            </article>
        </div>
    );
}