import DailyMessage from "@components/dailyMessage";
import Header from "@components/Header";
import Background from "@components/background";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Jour, Mois, Annee } from "@context/date.tsx";

export default function Daily() {
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
            <Background/>
            <Header/>
            <DailyMessage/>
        </>
    )
}