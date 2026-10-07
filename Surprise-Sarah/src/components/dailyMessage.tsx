import { useMemo } from "react";
import { messages } from "@context/messages";
import "@styles/dailyMessage.css";


function getDayOfYear(date: Date) {
    const start = new Date(date.getFullYear(), 0, 0);

    return Math.floor(
        (date.getTime() - start.getTime()) /
            (1000 * 60 * 60 * 24)
    );
}

export default function DailyMessage() {
    const message = useMemo(() => {
        const today = new Date();
        const dayOfYear = getDayOfYear(today);

        return messages[dayOfYear % messages.length];
    }, []);

    return (
        <section className="daily-message">
            <div className="daily-message__glow" />

            <div className="daily-message__card">
                <div className="daily-message__heart">
                    ♡
                </div>

                <span className="daily-message__eyebrow">
                    ton petit mot du jour
                </span>

                <div className="daily-message__separator">
                    <span />
                    <span>✦</span>
                    <span />
                </div>

                <p className="daily-message__text">
                    “{message}”
                </p>

                <div className="daily-message__separator">
                    <span />
                    <span>✦</span>
                    <span />
                </div>

                <div className="daily-message__footer">
                    <span>
                        avec une petite pensée pour toi
                    </span>

                    <span>♥</span>
                </div>
            </div>
        </section>
    );
}