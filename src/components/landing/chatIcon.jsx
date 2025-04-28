import IconLogo from "../../assets/icon";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { VscHubot } from "react-icons/vsc";
import { useState } from "react";

export default function ChatIcon({ onModalClick }) {
    const [show, setShow] = useState(false);

    return (
        <div
            className={`fixed transition-all duration-300 z-10 ${
                show ? "backdrop-blur-xs top-0 left-0 right-0 bottom-0" : ""
            }`}
        >
            <div className="fixed bottom-18 right-8 flex flex-col gap-6">
                <div
                    className={`transition-all duration-700 ease-in-out transform ${
                        show
                            ? "opacity-100 scale-100 translate-y-0 flex"
                            : "scale-95 translate-y-2 hidden"
                    } flex-col gap-4`}
                >
                    <button
                        onClick={onModalClick}
                        className="bg-white dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-[#121212] rounded-3xl text-center p-2 shadow-2xl cursor-pointer hover:scale-105 transition-all transform-300 flex row gap-2"
                    >
                        <VscHubot className="size-7"  />
                        Chat Bot
                    </button>

                    <a
                        href="https://wa.me/5511993404466"
                        className="bg-white dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-[#121212] rounded-3xl text-center p-2 shadow-2xl cursor-pointer hover:scale-105 transition-all transform-300 flex row gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiOutlineWhatsApp className="size-6" />
                        WhatsApp
                    </a>
                </div>

                <button
                    onClick={() => setShow((prev) => !prev)}
                    className="bg-white dark:bg-gray-950 w-20 h-20 rounded-full shadow-2xl flex center hover:bg-gray-100 dark:hover:bg-[#121212] cursor-pointer hover:scale-105 transition-all transform-300"
                >
                    <IconLogo />
                </button>
            </div>
        </div>
    );
}
