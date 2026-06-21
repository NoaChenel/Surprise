import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@styles/header.css";

export default function Header() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="hd-root">
            <div className="hd-logo">
                <button className="hd-link" onClick={() => {navigate("/Love"); setOpen(false);}}>
                    <i className="ti ti-heart" aria-hidden="true" />
                    Mon coeur
                </button>
            </div>

            <nav className={`hd-links${open ? " open" : ""}`}>
                <button className="hd-link" onClick={() => {navigate("/Love"); setOpen(false);}}>
                    <i className="ti ti-writing" aria-hidden="true" />
                    Lettre
                </button>
                <button className="hd-link" onClick={() => {navigate("/Mots"); setOpen(false);}}>
                    <i className="ti ti-mood-heart" aria-hidden="true" />
                    Mots mignons
                </button>
                <button className="hd-link" onClick={() => {navigate("/Date"); setOpen(false);}}>
                    <i className="ti ti-mail" aria-hidden="true" />
                    Date
                </button>
                <button className="hd-link" onClick={() => {navigate("/Jeux"); setOpen(false);}}>
                    <i className="ti ti-puzzle" aria-hidden="true" />
                    Mini jeux
                </button>
            </nav>

            <button
                className="hd-burger"
                aria-label="Menu"
                onClick={() => setOpen(o => !o)}
            >
                <i className="ti ti-menu-2" />
            </button>
        </header>
    );
}