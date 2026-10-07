import { useState } from "react";
import "@styles/tab.css";

// ---- Types ----
export type TabItem = {
    label: string;
    content: React.ReactNode;
};

type TabsProps = {
    items: TabItem[];
    defaultIndex?: number; // onglet actif au montage (0 par défaut)
};

// ---- Composant ----
export default function Tabs({ items, defaultIndex = 0 }: TabsProps) {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    if (items.length === 0) return null;

    return (
        <div className="tabs-root">
            {/* Barre d'onglets */}
            <div className="tabs-bar" role="tablist">
                {items.map((item, i) => (
                    <button
                        key={i}
                        role="tab"
                        aria-selected={activeIndex === i}
                        aria-controls={`tabpanel-${i}`}
                        id={`tab-${i}`}
                        className={`tabs-btn ${activeIndex === i ? "tabs-btn--active" : ""}`}
                        onClick={() => setActiveIndex(i)}
                    >
                        {item.label}

                        {/* indicateur animé sous l'onglet actif */}
                        {activeIndex === i && (
                            <span className="tabs-indicator" aria-hidden="true" />
                        )}
                    </button>
                ))}
            </div>

            {/* Panneau de contenu */}
            <div
                key={activeIndex}               // remonte le div → rejoue le fade-in
                role="tabpanel"
                id={`tabpanel-${activeIndex}`}
                aria-labelledby={`tab-${activeIndex}`}
                className="tabs-panel"
            >
                {items[activeIndex].content}
            </div>
        </div>
    );
}