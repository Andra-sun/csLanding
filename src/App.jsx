import { Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Chat from "./components/chatFans/Chat";
import Header from "./components/Header";
import { useState } from "react";
import TeamIntro from "./components/landing/TeamIntro";

export default function App() {
    const [showChat, setShowChat] = useState(false);

    const toggleChat = () => {
        setShowChat((prev) => !prev);
    };

    return (
        <div className="flex flex-col overflow-hidden h-screen w-screen relative">
            <Header onJoinClick={toggleChat} isChatOpen={showChat} />

            <div className="flex flex-1 overflow-hidden">
                <div className="flex-1 overflow-auto">
                    <TeamIntro />
                    <Routes>
                        <Route path="/" element={<Landing />} />
                    </Routes>
                </div>

                {showChat && (
                    <div className="w-1/3 h-full">
                        <Chat />
                    </div>
                )}
            </div>
        </div>
    );
}
