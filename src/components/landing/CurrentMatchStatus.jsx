function CurrentMatchStatus() {
    const match = {
        opponent: "NAVI",
        date: "28 de Abril",
        time: "15:00",
        status: "em andamento", // pode ser: "em andamento", "encerrado", "não iniciado"
        score: "1 - 0",
    };

    function getStatusColor(status) {
        switch (status) {
            case "em andamento":
                return "text-yellow-500";
            case "encerrado":
                return "text-red-500";
            case "não iniciado":
                return "text-gray-500";
            default:
                return "text-gray-500";
        }
    }

    return (
        <section className="py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Jogo Atual</h2>
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 flex flex-col items-center gap-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    FURIA vs {match.opponent}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                    {match.date} • {match.time}
                </p>
                <div className="text-4xl font-bold">{match.score}</div>
                <div
                    className={`${getStatusColor(
                        match.status
                    )} font-semibold text-lg`}
                >
                    {match.status.toUpperCase()}
                </div>
            </div>
        </section>
    );
}

export default CurrentMatchStatus;
