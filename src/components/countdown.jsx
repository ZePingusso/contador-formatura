function Countdown({ dataFinal, agora }) {
    const diferenca = dataFinal.getTime() - agora.getTime();

    if (diferenca <= 0) {
        return (
            <div className="finalizado">
                <h2>O semestre chegou ao fim!</h2>
                <p>Parabéns por concluir mais uma etapa.</p>
            </div>
        );
    }

    const totalSegundos = Math.floor(diferenca / 1000);

    const dias = Math.floor(totalSegundos / 86400);
    const horas = Math.floor((totalSegundos % 86400) / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;

    const valores = [
        { numero: dias, nome: "DIAS" },
        { numero: horas, nome: "HORAS" },
        { numero: minutos, nome: "MIN" },
        { numero: segundos, nome: "SEG" }
    ];

    return (
        <div className="countdown">
            {valores.map((item) => (
                <div className="time-card" key={item.nome}>
                    <span className="time-number">
                        {String(item.numero).padStart(2, "0")}
                    </span>

                    <span className="time-label">
                        {item.nome}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Countdown;