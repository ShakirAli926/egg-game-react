import "./App.css";
import Game from "./Game";
import {useState} from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import step1 from "../images/step-01.PNG";
import step2 from "../images/step-02.PNG";
import step3 from "../images/step-03.PNG";
import step4 from "../images/step-04.PNG";


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
    const [totalImages, setUser1Images] = useState([step2, step3, step4])

    const [image1, setImage1] = useState(step1)
    const [image2, setImage2] = useState(step1)



    function handleIncrement1() {
        setClickScore1(clickScore1+1)
        if(clickScore1===10)
            setImage1(totalImages[0])
        if(clickScore1===20)
            setImage1(totalImages[1])
        if(clickScore1===30)
            setImage1(totalImages[2])
    }
    function handleIncrement2() {
        setClickScore2(clickScore2+1)
        if(clickScore2===10)
            setImage2(totalImages[0])
        if(clickScore2===20)
            setImage2(totalImages[1])
        if(clickScore2===30)
            setImage2(totalImages[2])
    }


    return (
        <div className="ui container">
            <div className="row justify-content-center d-flex">
                <div className="card">
                    <div className={"text-center text-bold fw-bold fs-3 p-3"}>Game Code</div>
                </div>
            </div>
            <h4 className="text-center">At the end of the Game Winner will be here</h4>
            {/*Game Cards*/}
            <div className="row justify-content-center d-flex">
                <Card sx={{maxWidth: 345}}>
                    <CardHeader
                        avatar={
                            <Typography variant={"h5"} aria-label="recipe">
                                {userData.user1Id}
                            </Typography>
                        }
                        action={
                            <div>
                                <h4 className={"mt-3"}>Score: {clickScore1}</h4>
                                <button className="btn btn-danger btn-sm">Give Up</button>
                            </div>

                        }
                    />
                    <CardContent>
                        <Typography variant="p" color="text.secondary">
                            Your partner is {userData.user2Id}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        style={{cursor: "pointer"}}
                        onClick={() => handleIncrement1()}
                        image={image1}
                        width={250} height={450}
                        alt="Paella dish"
                    />
                </Card>


                <Card sx={{maxWidth: 345}}>
                    <CardHeader
                        avatar={
                            <Typography variant={"h5"} aria-label="recipe">
                                {userData.user2Id}
                            </Typography>
                        }
                        action={
                            <div>
                                <h4 className={"mt-3"}>Score: {clickScore2}</h4>
                                <button className="btn btn-danger btn-sm">Give Up</button>
                            </div>

                        }
                    />
                    <CardContent>
                        <Typography variant="p" color="text.secondary">
                            Your partner is Username
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        style={{cursor: "pointer"}}
                        onClick={() => handleIncrement2()}
                        image={image2}
                        width={250} height={450}
                        alt="Paella dish"
                    />
                </Card>
            </div>
        </div>
    );
}

export default App;
