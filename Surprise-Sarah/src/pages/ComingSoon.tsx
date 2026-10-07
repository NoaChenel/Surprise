import Background from "@components/background";
import Header from "@components/Header";
import "@styles/comingSoon.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Jour, Mois, Annee } from "@context/date.tsx";

export default function ComingSoon() {
    const navigate = useNavigate();

    useEffect(() => {
        const target = new Date(Annee, Mois - 1, Jour, 0, 0, 0);
        const now = new Date();

        if (now < target) {
            navigate("/");
        }
    }, [navigate]);

    return (
        <>
            <Background />
            <Header />
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