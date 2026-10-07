import { type FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import "@styles/dateRequest.css";

type FormData = {
    date: string;
    time: string;
    activity: string;
    message: string;
};

const initialForm: FormData = {
    date: "",
    time: "",
    activity: "",
    message: "",
};

const EMAILJS_SERVICE_ID = "service_qcm9sc8";
const EMAILJS_TEMPLATE_ID = "template_3ua0bj9";
const EMAILJS_PUBLIC_KEY = "5U76I7ltB3A59323l";

export default function DateRequest() {
    const [form, setForm] = useState<FormData>(initialForm);
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (
        field: keyof FormData,
        value: string
    ) => {
        setForm((previous) => ({
            ...previous,
            [field]: value,
        }));
    };

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setError("");

        if (!form.date) {
            setError(
                "Choisis une date pour notre petit rendez-vous. 📅"
            );
            return;
        }

        if (!form.time) {
            setError(
                "Et à quelle heure dois-je me préparer ? 👀"
            );
            return;
        }

        if (!form.activity) {
            setError(
                "Il faut choisir ce qu'on va faire. 💕"
            );
            return;
        }

        try {
            setSending(true);

            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    date: formatDate(form.date),
                    time: form.time,
                    activity: form.activity,
                    message:
                        form.message.trim() ||
                        "Aucun petit mot laissé 💕",
                },
                {
                    publicKey: EMAILJS_PUBLIC_KEY,
                }
            );

            setSent(true);
        } catch (error) {
            console.error("Erreur EmailJS :", error);

            setError(
                "Oups... impossible d'envoyer la demande pour le moment. 💔"
            );
        } finally {
            setSending(false);
        }
    };

    const handleReset = () => {
        setForm(initialForm);
        setSent(false);
        setError("");
    };

    if (sent) {
        return (
            <section className="date-request">
                <div className="date-request__glow" />

                <div className="date-request__success">
                    <div className="date-request__success-heart">
                        💌
                    </div>

                    <span className="date-request__eyebrow">
                        demande envoyée
                    </span>

                    <h1 className="date-request__title">
                        C'est noté ❤️
                    </h1>

                    <div className="date-request__separator">
                        <span />
                        <span>✦</span>
                        <span />
                    </div>

                    <p className="date-request__success-text">
                        Ta petite demande est bien arrivée.
                    </p>

                    <p className="date-request__success-subtext">
                        Maintenant, il ne me reste plus qu'à
                        préparer notre petit date. 🥰
                    </p>

                    <div className="date-request__summary">

                        <div>
                            <span>Le</span>
                            <strong>
                                {formatDate(form.date)}
                            </strong>
                        </div>

                        <div>
                            <span>À</span>
                            <strong>{form.time}</strong>
                        </div>

                        <div>
                            <span>Au programme</span>
                            <strong>{form.activity}</strong>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="date-request__back-button"
                        onClick={handleReset}
                    >
                        Faire une autre demande 💕
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="date-request">
            <div className="date-request__glow" />

            <div className="date-request__card">
                <div className="date-request__icon">
                    💌
                </div>

                <span className="date-request__eyebrow">
                    une petite proposition
                </span>

                <h1 className="date-request__title">
                    Demande de date
                </h1>

                <p className="date-request__intro">
                    Alors... quand est-ce qu'on se voit ?
                </p>

                <div className="date-request__separator">
                    <span />
                    <span>✦</span>
                    <span />
                </div>

                <form
                    className="date-request__form"
                    onSubmit={handleSubmit}
                >
                    <div className="date-request__row">
                        <div className="date-request__field">
                            <label htmlFor="date">
                                La date
                            </label>

                            <input
                                id="date"
                                name="date"
                                type="date"
                                min={getToday()}
                                value={form.date}
                                onChange={(event) =>
                                    handleChange(
                                        "date",
                                        event.target.value
                                    )
                                }
                            />
                        </div>

                        <div className="date-request__field">
                            <label htmlFor="time">
                                L'heure
                            </label>

                            <input
                                id="time"
                                name="time"
                                type="time"
                                value={form.time}
                                onChange={(event) =>
                                    handleChange(
                                        "time",
                                        event.target.value
                                    )
                                }
                            />
                        </div>
                    </div>

                    <div className="date-request__field">
                        <label htmlFor="activity">
                            Notre programme
                        </label>

                        <select
                            id="activity"
                            name="activity"
                            value={form.activity}
                            onChange={(event) =>
                                handleChange(
                                    "activity",
                                    event.target.value
                                )
                            }
                        >
                            <option value="">
                                Choisis une idée...
                            </option>

                            <option value="🍽️ Un petit dîner">
                                🍽️ Un petit dîner
                            </option>

                            <option value="🎬 Une soirée cinéma">
                                🎬 Une soirée cinéma
                            </option>

                            <option value="🌙 Une balade">
                                🌙 Une balade
                            </option>

                            <option value="☕ Un café">
                                ☕ Un café
                            </option>

                            <option value="🎮 Une soirée jeux">
                                🎮 Une soirée jeux
                            </option>

                            <option value="🌸 Une sortie surprise">
                                🌸 Une sortie surprise
                            </option>

                            <option value="💕 Peu importe, je te laisse choisir">
                                💕 Peu importe, je te laisse choisir
                            </option>
                        </select>
                    </div>

                    <div className="date-request__field">
                        <label htmlFor="message">
                            Un petit mot pour moi
                            <span>facultatif</span>
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Une petite envie, une idée, un mot doux..."
                            value={form.message}
                            onChange={(event) =>
                                handleChange(
                                    "message",
                                    event.target.value
                                )
                            }
                        />
                    </div>

                    {error && (
                        <div className="date-request__error">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="date-request__submit"
                        disabled={sending}
                    >
                        {sending ? (
                            <>
                                <span className="date-request__spinner" />
                                Envoi en cours...
                            </>
                        ) : (
                            <>
                                Envoyer ma demande
                                <span>♥</span>
                            </>
                        )}
                    </button>
                </form>

                <p className="date-request__hint">
                    Promis, cette demande restera entre nous. 🤫
                </p>
            </div>
        </section>
    );
}

function getToday() {
    return new Date()
        .toISOString()
        .split("T")[0];
}

function formatDate(date: string) {
    if (!date) {
        return "";
    }

    return new Date(
        `${date}T12:00:00`
    ).toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}