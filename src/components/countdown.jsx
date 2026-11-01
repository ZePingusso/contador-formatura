import { useEffect, useState } from "react";

function Countdown() {
    // Data final do semestre
    const dataFinal = new Date("2026-12-18T23:59:59");

    const [tempo, setTempo] = useState({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0
    });

    useEffect(() => {
        function calcularTempo() {
            const agora = new Date();
            const diferenca = dataFinal - agora;

            if (diferenca <= 0) {
                setTempo(null);
                return;
            }

            const totalSegundos = Math.floor(diferenca / 1000);

            const dias = Math.floor(totalSegundos / 86400);
            const horas = Math.floor((totalSegundos % 86400) / 3600);
            const minutos = Math.floor((totalSegundos % 3600) / 60);
            const segundos = totalSegundos % 60;

            setTempo({
                dias,
                horas,
                minutos,
                segundos
            });
        }

        calcularTempo();

        const intervalo = setInterval(calcularTempo, 1000);

        return () => clearInterval(intervalo);
    }, []);

    if (!tempo) {
        return <h2>O semestre chegou ao fim! 🎉</h2>;
    }

    return (
        <div className="contador">
            <div className="tempo">
                <span>{tempo.dias}</span>
                <small>Dias</small>
            </div>

            <div className="tempo">
                <span>{String(tempo.horas).padStart(2, "0")}</span>
                <small>Horas</small>
            </div>

            <div className="tempo">
                <span>{String(tempo.minutos).padStart(2, "0")}</span>
                <small>Minutos</small>
            </div>

            <div className="tempo">
                <span>{String(tempo.segundos).padStart(2, "0")}</span>
                <small>Segundos</small>
            </div>
        </div>
    );
}

export default Countdown;