import Header from "./components/Header.jsx";
import Countdown from "./components/countdown.jsx";
import DigitalClock from "./components/DigitalClock.jsx";
import ProgressBar from "./components/progressBar.jsx";
import { useState, useEffect } from "react";

import { CalendarDays, Sparkles } from "lucide-react";

import "./App.css";

function App() {
    const dataInicio = new Date(2026, 7, 3, 0, 0, 0);
    const dataFinal = new Date(2026, 11, 18, 23, 59, 59);

    const [agora, setAgora] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setAgora(new Date());
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    const dataFormatada = dataFinal.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    return (
        <main className="page-container">
            <div className="background-glow glow-one"></div>
            <div className="background-glow glow-two"></div>

            <div className="dashboard">
                <Header />

                <section className="hero">
                    <div className="hero-label">
                        <Sparkles size={15} />
                        <span>O TEMPO NÃO PARA</span>
                    </div>

                    <h1>
                        Seu semestre está
                        <span> acabando.</span>
                    </h1>

                    <p>
                        Cada segundo conta para o próximo capítulo.
                        Continue firme na sua jornada!
                    </p>

                    <DigitalClock agora={agora} />
                </section>

                <section className="countdown-section">
                    <div className="section-heading">
                        <span>COUNTDOWN TO THE END</span>
                        <div className="heading-line"></div>
                    </div>

                    <Countdown
                        dataFinal={dataFinal}
                        agora={agora}
                    />
                </section>

                <ProgressBar
                    inicio={dataInicio}
                    fim={dataFinal}
                    agora={agora}
                />

                <footer className="footer">
                    <div className="footer-date">
                        <CalendarDays size={16} />

                        <span>
                            ENCERRAMENTO: {dataFormatada.toUpperCase()}
                        </span>
                    </div>

                    <span className="footer-semester">
                        SEMESTER 2026.2
                    </span>
                </footer>
            </div>
        </main>
    );
}

export default App;
