export default function Lineup() {
    const players = [
        {
            name: "FalleN",
            image: "https://img-cdn.hltv.org/playerbodyshot/Wf26SO_o8nvnsLh0AqZXc5.png?ixlib=java-2.1.0&w=400&s=36b7189a4ae7b020d0acb087fd44777a",
            status: 1,
        },
        {
            name: "KSCERATO",
            image: "https://img-cdn.hltv.org/playerbodyshot/U6t0j2bJDKUR3mTI8rIqv7.png?ixlib=java-2.1.0&w=400&s=b5257c378b8122f415f21985855e95ca",
            status: 1,
        },
        {
            name: "yuurih",
            image: "https://img-cdn.hltv.org/playerbodyshot/i6UGhkYxrhutAOmWZT0-8O.png?ixlib=java-2.1.0&w=400&s=2cd696f6ff4baf5680a43d537214b6eb",
            status: 1,
        },
        {
            name: "YEKINDAR",
            image: "https://img-cdn.hltv.org/playerbodyshot/rRclDPBXIMxFv2fv0dV0J0.png?ixlib=java-2.1.0&w=400&s=2b0f6209ca40efa081852b9d1d8e01c1",
            status: 1,
        },
        {
            name: "molodoy",
            image: "https://img-cdn.hltv.org/playerbodyshot/qNyAd_xVHTTmbCAKPx-jPk.png?ixlib=java-2.1.0&w=400&s=b128ede878e462107c70590202b14139",
            status: 1,
        },
        {
            name: "skullz",
            image: "https://static.draft5.gg/player/130-skullz-b8a110d147c5871c7814a41c742330e93ecef0ca.png",
            status: 2,
        },
        {
            name: "chelo",
            image: "https://static.draft5.gg/player/44-chelo-882b3eaf4feac4358e4d5d9e9216c27f9987d677.png",
            status: 2,
        },
    ];

    return (
        <section className="space-y-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Lineup</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {players.map((player) => (
                    <div
                        key={player.name}
                        className={`p-4 rounded-lg flex flex-col items-center shadow-lg transition-all duration-300 ease-in-out transform ${
                            player.status === 1
                                ? "bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-white"
                                : "bg-gray-300 text-gray-800"
                        }`}
                    >
                        <img
                            src={player.image}
                            alt={player.name}
                            className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white"
                        />
                        <h3 className="text-lg font-bold">{player.name}</h3>
                        <div
                            className={`mt-2 py-1 px-4 rounded-full text-sm font-semibold ${
                                player.status === 1
                                    ? "bg-green-500 text-white"
                                    : "bg-yellow-500 text-black"
                            }`}
                        >
                            {player.status === 1 ? "Titular" : "Reserva"}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
