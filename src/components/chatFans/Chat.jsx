import { useState, useEffect, useRef } from "react";
import { FiSend } from "react-icons/fi";

export default function Chat() {
    const [inputMessage, setInputMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    function handleSend() {
        if (inputMessage.trim()) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: inputMessage, fromUser: true },
            ]);
            setInputMessage("");
        }
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSend();
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    text: `Mensagem ${prevMessages.length + 1}`,
                    fromUser: false,
                },
            ]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <div className="bg-gray-50 dark:bg-black flex flex-col h-full p-5 w-full">
            <h2 className="text-2xl font-bold mb-4">Chat ao vivo</h2>

            <div className="flex-1 overflow-y-auto flex flex-col gap-2 mb-4 pr-2">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`p-2 rounded shadow text-sm animate-fade-in ${
                            message.fromUser
                                ? "bg-gray-200 dark:bg-neutral-700"
                                : "bg-white dark:bg-neutral-800"
                        }`}
                    >
                        {message.text}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className="flex items-center gap-2">
                <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="border border-gray-300 dark:border-neutral-700 p-2 rounded w-full bg-white dark:bg-neutral-900 text-black dark:text-white"
                    placeholder="Digite sua mensagem..."
                />
                <button
                    onClick={handleSend}
                    className="bg-black text-white rounded hover:bg-gray-800 p-2 flex items-center justify-center"
                >
                    <FiSend strokeWidth={2} className="size-5" />
                </button>
            </div>
        </div>
    );
}
