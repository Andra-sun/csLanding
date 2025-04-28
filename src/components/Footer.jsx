function Footer() {
    return (
        <footer className="bg-black text-white p-4 text-center w-screen">
            <p className="text-sm">Siga a FURIA nas redes sociais!</p>
            <div>
                <a
                    href="https://www.instagram.com/furiagaming/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon mx-2"
                >
                    Instagram
                </a>
                <a
                    href="https://twitter.com/FURIA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon mx-2"
                >
                    Twitter
                </a>
            </div>
        </footer>
    );
}

export default Footer;
