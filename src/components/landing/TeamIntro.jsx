import IconLogo from "../../assets/icon";

function TeamIntro() {
    return (
        <section className="relative flex items-center justify-center h-screen dark:bg-black bg-white overflow-hidden">
            <IconLogo className="absolute md:size-200 size-170 opacity-20" />

            <div className="relative text-center dark:text-white text-gray-800">
                <h1 className="text-4xl font-extrabold mb-4">
                    Bem-vindo à FURIA CS
                </h1>
                <p className="text-lg dark:text-gray-300 max-w-xl mx-auto">
                    O time brasileiro que desafia o mundo no Counter-Strike.
                </p>
            </div>
        </section>
    );
}

export default TeamIntro;
