import "./App.css";
import Game from "./Game";

function App() {

    return (
        <div className="ui container">
            <div className="row justify-content-center d-flex">
                    <Game userName={"You"} userScore={0}/>
                    <Game userName={"John"} userScore={0}/>
            </div>
        </div>
    );
}

export default App;
