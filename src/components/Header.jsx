import FuriaLogo from "../assets/furia";
import { useNavigate } from "react-router-dom";

function Header({ onJoinClick, isChatOpen }) {
    const navigate = useNavigate();

    return (
        <header className="dark:bg-black bg-white shadow-md px-6 py-4 flex justify-between items-center w-full transition-all duration-300">
            <FuriaLogo className="dark:text-white text-black" />
            <h2 className="font-bold text-xl hidden md:block">Nosso time de CS</h2>
            <button
                onClick={() => {
                    navigate("/");
                    onJoinClick();
                }}
                className="dark:bg-white dark:hover:bg-gray-200 bg-black hover:bg-gray-800 dark:text-black text-white py-2 px-6 rounded-lg font-medium transition-all duration-300 cursor-pointer text-nowrap"
            >
                {isChatOpen ? "Fechar Chat" : "Juntar a torcida"}
            </button>
        </header>
    );
}

export default Header;
