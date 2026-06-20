import Background from "@components/background";
import Header from "@components/Header";
import "@styles/comingSoon.css";

export default function ComingSoon() {
    return (
        <>
            <Background />
            <Header/>
            <div className="cs-root">
                <div className="cs-card">
                    <span className="cs-emoji">🌸</span>
                    <h1 className="cs-title">Bientôt disponible</h1>
                    <p className="cs-text">
                        Cette page est encore en train d'être préparée avec amour.<br />
                        Reviens très vite 💕
                    </p>
                    <div className="cs-dots">
                        <span /><span /><span />
                    </div>
                </div>
            </div>
        </>
    );
}