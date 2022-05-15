import React, { useEffect, useState } from "react";
import Step01 from "../images/step-01.PNG";
import Step02 from "../images/step-02.PNG";
import Step03 from "../images/step-03.PNG";
import Step04 from "../images/step-04.PNG";

const TodoList = () => {
  const [counter01, setCounter01] = useState(0);
  const [counter02, setCounter02] = useState(0);

  const [currentImage01, setCurrentImage01] = useState(Step01);
  const [currentImage02, setCurrentImage02] = useState(Step01);

  const increment_Count = (counter, setCounter) => {
    if (counter < 100) setCounter(counter + 1);
  };
  useEffect(() => {
    if (counter01 > 25 && counter01 < 50) {
      setCurrentImage01(Step02);
    } else if (counter01 > 50 && counter01 < 100) {
      setCurrentImage01(Step03);
    } else if (counter01 == 100) {
      setCurrentImage01(Step04);
    }

    if (counter02 > 25 && counter02 < 50) {
      setCurrentImage02(Step02);
    } else if (counter02 > 50 && counter02 < 100) {
      setCurrentImage02(Step03);
    } else if (counter02 == 100) {
      setCurrentImage02(Step04);
    }
  });
  return (
    <div className="row text-center">
      <div
        className="col-md-6 card text-dark bg-light mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header d-flex justify-content-between align-items-center">
          <h1>You</h1>
          <div>
            <div>
              <h4 className="d-inline">Score : </h4>
              <h4 className="d-inline">{counter01}</h4>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">Destroy the Egg!</h5>
          <h3>Click on it as fast as you can</h3>
          <div className="btn_div">
            <button onClick={() => increment_Count(counter01, setCounter01)}>
              {" "}
              <img
                src={currentImage01}
                className="img-fluid"
                alt="EggCounter"
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className="col-md-6 card text-dark bg-light mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3>Angry Chicken</h3>
          <div className="d-inline">
            <h4>Score : </h4>
            <h4>{counter02}</h4>
          </div>
        </div>
        <div className="card-body ">
          <div className="btn_div pt-4 mt-5">
            <button onClick={() => increment_Count(counter02, setCounter02)}>
              <img
                src={currentImage02}
                className="img-fluid"
                alt="EggCounter"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
