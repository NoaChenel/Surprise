import Background from "@components/background"
import Countdown from "@components/countDown"
import { Jour, Mois, Annee } from "@context/date.tsx"

const Attente = function () {
    return <>
        <Background />
        <div className="Countdown-Accueil">
            <Countdown day={Jour} month={Mois} year={Annee} redirectTo="/Love" />
        </div>
    </>
}

export default Attente