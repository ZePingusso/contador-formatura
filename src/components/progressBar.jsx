
function ProgressBar({ inicio, fim, agora }) {
    const duracao = fim.getTime() - inicio.getTime();
    const decorrido = agora.getTime() - inicio.getTime();

    const progresso = Math.min(
        100,
        Math.max(0, (decorrido / duracao) * 100)
    );

    return (
        <div className="progress-section">
            <div className="progress-info">
                <span>PROGRESSO DO SEMESTRE</span>
                <strong>{progresso.toFixed(1)}%</strong>
            </div>

            <div
                className="progress-track"
                role="progressbar"
                aria-valuenow={Number(progresso.toFixed(1))}
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    className="progress-fill"
                    style={{ width: `${progresso}%` }}
                />
            </div>

            <div className="progress-footer">
                <span>Início do semestre</span>
                <span>Fim do semestre</span>
            </div>
        </div>
    );
}

export default ProgressBar;
