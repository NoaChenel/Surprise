import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "@styles/countdown.css";

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

type CountdownProps = {
    day: number;
    month: number;
    year: number;
    doneTitle?: string;
    doneMessage?: string;
    redirectTo?: string;
};

const getTargetDate = (day: number, month: number, year: number): Date => {
    return new Date(year, month - 1, day, 0, 0, 0);
};

const computeTimeLeft = (target: Date): TimeLeft => {
    const diff = target.getTime() - Date.now();

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff % 86_400_000) / 3_600_000),
        minutes: Math.floor((diff % 3_600_000) / 60_000),
        seconds: Math.floor((diff % 60_000) / 1_000),
    };
};

const pad = (n: number): string => String(n).padStart(2, "0");

const UNITS: { key: keyof TimeLeft; label: string }[] = [
    { key: "days", label: "Jours" },
    { key: "hours", label: "Heures" },
    { key: "minutes", label: "Minutes" },
    { key: "seconds", label: "Secondes" },
];

const MONTH_NAMES = [
    "janvier", "février", "mars", "avril", "mai", "juin",
    "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];

export default function Countdown({
    day,
    month,
    year,
    doneTitle = "Le grand jour est arrivé",
    doneMessage = "Joyeux anniversaire ❤️",
    redirectTo
}: CountdownProps) {
    const navigate = useNavigate();
    const target = getTargetDate(day, month, year);
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => computeTimeLeft(target));
    const [done, setDone] = useState(() => computeTimeLeft(target).days === 0 &&
        computeTimeLeft(target).hours === 0 &&
        computeTimeLeft(target).minutes === 0 &&
        computeTimeLeft(target).seconds === 0
    );

    useEffect(() => {
        const tick = () => {
            const next = computeTimeLeft(target);
            const isOver = Object.values(next).every((v) => v === 0);
            setTimeLeft(next);
            if (isOver) setDone(true);
        };

        const id = setInterval(tick, 1_000);
        return () => clearInterval(id);
    }, [target]);

    useEffect(() => {
        if (!done || !redirectTo) return;

        const id = setTimeout(() => navigate(redirectTo), 0);
        return () => clearTimeout(id);
    }, [done, redirectTo, navigate]);

    const label = `${day} ${MONTH_NAMES[month - 1]} ${year}`;

    if (done) {
        return (
            <div className="cd-root">
                <p className="cd-eyebrow">{doneTitle}</p>
                <h2 className="cd-ready">{doneMessage}</h2>
            </div>
        );
    }

    return (
        <div className="cd-container">
            <div className="cd-root">
                <p className="cd-eyebrow">Compte à rebours jusqu'au {label}</p>

                <div className="cd-grid">
                    {UNITS.map(({ key, label }, i) => (
                        <div key={key} className="cd-item">
                            <div className="cd-block" style={{ animationDelay: `${i * 0.15}s` }}>
                                <span className="cd-number" key={timeLeft[key]}>
                                    {pad(timeLeft[key])}
                                </span>
                                <span className="cd-label">{label}</span>
                            </div>

                            {i < UNITS.length - 1 && (
                                <span className="cd-sep" aria-hidden="true">
                                    :
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}