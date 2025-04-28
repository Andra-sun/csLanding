function Merchandise() {
    const products = [
        {
            name: "Camiseta Oficial",
            price: "R$ 359,00",
            link: "https://www.furia.gg/produto/camiseta-oficial-furia-adidas-preta-150265",
            image: "https://furiagg.fbitsstatic.net/img/p/camiseta-oficial-furia-adidas-preta-150265/337491-1.jpg?w=1280&h=1280&v=202503281009",
        },
        {
            name: "Sacochila Furia",
            price: "R$ 179,00",
            link: "https://www.furia.gg/produto/sacochila-furia-preta-150267",
            image: "https://furiagg.fbitsstatic.net/img/p/sacochila-furia-preta-150267/337499-1.jpg?w=1280&h=1280&v=202504101318",
        },
        {
            name: "Calça Furia",
            price: "R$ 279,00",
            image: "https://furiagg.fbitsstatic.net/img/p/calca-furia-future-is-black-preta-150143/336659-1.jpg?w=1280&h=1280&v=no-value",
            link: "https://www.furia.gg/produto/calca-furia-future-is-black-preta-150143",
        },
    ];

    return (
        <section className="py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">
                Loja Oficial
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-10 max-w-2xl mx-auto">
                Confira os produtos oficiais da FURIA e leve o espírito do time
                com você.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-6 flex flex-col items-center">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                {product.name}
                            </h3>
                            <p className=" font-bold mb-4">
                                {product.price}
                            </p>
                            <a
                                href={product.link}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                            >
                                Comprar
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Merchandise;
