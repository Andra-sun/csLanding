import React from "react";

function getBorderClass(status) {
    switch (status) {
        case "win":
            return "border-3 border-green-500";
        case "loss":
            return "border-3 border-red-500";
        case "draw":
            return "";
        default:
            return "";
    }
}

function MatchResultList() {
    const results = [
        {
            opponent: "The MongolZ",
            date: "9 de Abril",
            time: "09:50",
            result: "loss",
            score: "0 - 2",
            tournament: "PGL Bucharest 2025",
        },
        {
            opponent: "Virtus.pro",
            date: "8 de Abril",
            time: "06:05",
            result: "loss",
            score: "0 - 2",
            tournament: "PGL Bucharest 2025",
        },
        {
            opponent: "complexity",
            date: "7 de Abril",
            time: "11:05",
            result: "loss",
            score: "1 - 2",
            tournament: "PGL Bucharest 2025",
        },
        {
            opponent: "Apogee",
            date: "6 de Abril",
            time: "12:35",
            result: "win",
            score: "2 - 0",
            tournament: "PGL Bucharest 2025",
        },
    ];

    const tournaments = [...new Set(results.map((match) => match.tournament))];

    return (
        <section className="space-y-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Resultados</h2>

            {tournaments.map((tournament) => (
                <div key={tournament} className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                        {tournament}
                    </h3>

                    <div className="flex overflow-x-auto gap-6 px-2 py-4">
                        {results
                            .filter((match) => match.tournament === tournament)
                            .map((match, index) => (
                                <div
                                    key={index}
                                    className={`min-w-[250px] p-6 rounded-xl shadow-lg shadow-inner flex flex-col justify-between items-start space-y-4 ${getBorderClass(
                                        match.result
                                    )} bg-white dark:bg-neutral-800 border-2 border-opacity-30`}
                                >
                                    <div className="flex flex-col">
                                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                                            FURIA vs {match.opponent}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {match.date} • {match.time}
                                        </p>
                                    </div>
                                    <div
                                        className={`text-lg font-medium ${
                                            match.result === "win"
                                                ? "text-green-500"
                                                : match.result === "loss"
                                                ? "text-red-500"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        {match.score} -{" "}
                                        {match.result === "win" && "Vitória"}
                                        {match.result === "loss" && "Derrota"}
                                        {match.result === "draw" && "Empate"}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default MatchResultList;
