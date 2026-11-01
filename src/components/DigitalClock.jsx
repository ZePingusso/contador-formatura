import { Clock } from "lucide-react";

function DigitalClock({ agora }) {
    const horario = agora.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    return (
        <div className="digital-clock">
            <Clock size={16} />
            <span>{horario}</span>
        </div>
    );
}

export default DigitalClock;