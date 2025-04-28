function Footer() {
    return (
        <footer className="bg-black text-white p-6 text-center w-screen">
            <p className="text-sm mb-2">Siga a FURIA nas redes sociais!</p>
            <div className="mb-4">
                <a
                    href="https://www.instagram.com/furiagg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon mx-2 hover:underline"
                >
                    Instagram
                </a>
                <a
                    href="https://twitter.com/FURIA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon mx-2 hover:underline"
                >
                    Twitter
                </a>
            </div>
            <p className="text-xs text-gray-400">
                Este site foi desenvolvido para fins de demonstração. Algumas
                informações exibidas podem ser fictícias ou meramente
                ilustrativas.
            </p>
        </footer>
    );
}

export default Footer;
