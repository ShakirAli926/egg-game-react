import "./App.css";
import Game from "./Game";
import {useState} from "react";

function App() {
    const [userData, setUserData] = useState({
        id: 1,
        user1Id: 1,
        user2Id: 2,
        user1Score: 0,
        user2Score: 0,
        user1Joined: false,
        user2Joined: false,
        winner: null,
        gameCode: "aabc-1s4d-8dnf-kkl0"
    })
    const [clickScore1, setClickScore1] = useState(userData.user1Score)
    const [clickScore2, setClickScore2] = useState(userData.user2Score)

    return (
        <div className="ui container">
            <div className="row justify-content-center d-flex">
                <div className="card">
                    <div className={"text-center text-bold fw-bold fs-3 p-3"}>Game Code</div>
                </div>
            </div>

            <h4 className="text-center">At the end of the Game Winner will be here</h4>

            <div className="row justify-content-center d-flex">
                    <Game userName={`User ${userData.user1Id}`} clickUser1={setClickScore1} userScore={userData.user1Score}/>
                    <Game userName={`User ${userData.user2Id}`} clickUser1={setClickScore2} userScore={userData.user2Score}/>
            </div>
        </div>
    );
}

export default App;
