import { useState, useRef, useEffect } from "react";
import { VscHubot } from "react-icons/vsc";

export default function ChatModal({ onClose }) {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const bottomRef = useRef(null);

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        const botMessage = { sender: "bot", text: `Recebido: "${input}"` };

        setMessages((prev) => [...prev, userMessage, botMessage]);
        setInput("");
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-2xl w-full max-w-md relative animate-fade-in-up flex flex-col h-[80%] border border-gray-200 dark:border-neutral-600">
                
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white text-2xl font-black"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-extrabold mb-4 flex flex-row gap-2 text-gray-900 dark:text-gray-100">
                    <VscHubot className="size-7 text-gray-500 dark:text-gray-400" />
                    ChatBot
                </h2>

                <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-2 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`p-3 rounded-lg max-w-xs text-sm font-medium ${
                                msg.sender === "user"
                                    ? "bg-gray-200 text-gray-800 dark:bg-neutral-600 dark:text-gray-100 self-end ml-auto"
                                    : "bg-gray-100 text-gray-700 dark:bg-neutral-600 dark:text-gray-200 self-start mr-auto"
                            }`}
                        >
                            {msg.text}
                        </div>
                    ))}
                    <div ref={bottomRef} />
                </div>

                <div className="flex gap-2">
                    <input
                        type="text"
                        className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-neutral-500 bg-gray-50 dark:bg-neutral-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        placeholder="Digite sua mensagem..."
                    />
                    <button
                        onClick={sendMessage}
                        className="bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg px-4 transition-all dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
}
