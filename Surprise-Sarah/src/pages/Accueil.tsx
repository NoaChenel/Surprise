import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Background from "@components/background";
import Header from "@components/Header";
import Lettre from "@components/Lettre/laLettre";
import Lettre6m from "@components/Lettre/Lettre6m";
import Tabs from "@components/tab";
import { Jour, Mois, Annee } from "@context/date.tsx";

const Accueil = function () {
    const navigate = useNavigate();

    useEffect(() => {
        const target = new Date(Annee, Mois - 1, Jour, 0, 0, 0);
        const now = new Date();

        if (now < target) {
            navigate("/");
        }
    }, [navigate]);

    return <>
        <Background />
        <Header />
        <Tabs items={[{label : "Anniversaire", content : <Lettre/>},{label : "6 mois", content : <Lettre6m/>}]}/>
    </>
}

export default Accueil