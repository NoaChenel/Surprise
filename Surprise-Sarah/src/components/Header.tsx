import { useState } from "react";
import "@styles/header.css";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="hd-root">
            <div className="hd-logo">
                <a href="/Love" className="hd-link" onClick={() => setOpen(false)}>
                    <i className="ti ti-heart" aria-hidden="true" />
                    Mon coeur
                </a>
            </div>

            <nav className={`hd-links${open ? " open" : ""}`}>
                <a href="/Love" className="hd-link" onClick={() => setOpen(false)}>
                    <i className="ti ti-writing" aria-hidden="true" />
                    Lettre
                </a>
                <a href="/Mots" className="hd-link" onClick={() => setOpen(false)}>
                    <i className="ti ti-mood-heart" aria-hidden="true" />
                    Mots mignons
                </a>
                <a href="/Date" className="hd-link" onClick={() => setOpen(false)}>
                    <i className="ti ti-mail" aria-hidden="true" />
                    Date
                </a>
                <a href="/Jeux" className="hd-link" onClick={() => setOpen(false)}>
                    <i className="ti ti-puzzle" aria-hidden="true" />
                    Mini jeux
                </a>
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