import { FaGamepad } from "react-icons/fa"; // Ícone de jogo
import { MdAccessTime } from "react-icons/md"; // Ícone de hora
import { FaMapMarkerAlt } from "react-icons/fa"; // Ícone de local

function UpcomingMatches() {
    const matches = [
        {
            teams: "FURIA vs NAVI",
            date: "28 de Abril • 15:00",
            location: "Estádio X, São Paulo",
        },
        {
            teams: "FURIA vs G2",
            date: "1 de Maio • 18:00",
            location: "Arena Y, Rio de Janeiro",
        },
    ];

    return (
        <section>
            <h2 className="text-3xl font-bold mb-6 text-center">
                Próximos Jogos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {matches.map((match, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xl font-semibold text-gray-900 dark:text-white">
                                {match.teams}
                            </span>
                            <FaGamepad className="text-2xl text-yellow-500" />
                        </div>
                        <div className="flex items-center gap-2 mb-3 text-gray-700 dark:text-gray-300">
                            <MdAccessTime className="text-xl" />
                            <span>{match.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                            <FaMapMarkerAlt className="text-xl" />
                            <span>{match.location}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default UpcomingMatches;
