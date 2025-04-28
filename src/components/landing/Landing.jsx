import ChatIcon from "./chatIcon";
import UpcomingMatches from "./UpcomingMatches";
import News from "./News";
import Merchandise from "./Merchandise";
import MatchResult from "./MatchResult";
import CurrentMatchStatus from "./CurrentMatchStatus";
import { useState } from "react";
import ChatModal from "../chatBot/chatBot"
import Lineup from "./Lineup";
function Landing() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal((prev) => !prev);
    };

    return (
        <main className="max-w-5xl mx-auto px-4 py-10 space-y-16 overflow-auto relative">
            <CurrentMatchStatus />
            <UpcomingMatches />
            <MatchResult />
            <Lineup />
            <News />
            <Merchandise />
            <ChatIcon onModalClick={toggleModal} />

            {showModal && <ChatModal onClose={toggleModal} />}
        </main>
    );
}

export default Landing;
