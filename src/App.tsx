import { useState } from "react";
import "./App.css";

import { motion } from "framer-motion";

function App() {
  const [choice, setChoice] = useState("");
  const [dinnerTonight, setDinnerTonight] = useState([
    { name: "Tacos", weight: 0.5 },
    { name: "Lasagna", weight: 0.5 },
    { name: "Chicken Pockets", weight: 0.5 },
    { name: "Grilled Cheese", weight: 0.5 },
    { name: "Pancakes", weight: 0.5 },
    { name: "Chicken and Rice", weight: 0.5 },
    { name: "Korean Beef", weight: 0.5 },
    { name: "Steak and Potatoes", weight: 0.5 },
    { name: "Frozen Pizza", weight: 0.5 },
  ]);

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temp = Array.from(dinnerTonight);
    const index = temp.findIndex((rs) => rs.name === e.target.name);
    temp[index].weight = e.target.valueAsNumber;
    setDinnerTonight(temp);
  };

  const calculateRandomChoice = () => {
    const allChoices = dinnerTonight.map((rs) => new Array(Math.round(rs.weight * 20)).fill(rs.name)).flat();
    const randomChoice = allChoices[Math.floor(Math.random() * allChoices.length)];
    setChoice(randomChoice);
  };

  return (
    <div className="container text-center">
      <h1 className="titlefont">What's For dinner?</h1>
      <div className="row justify-content-center">
        <motion.div>
          <motion.h1
            layout
            transition={{ type: "spring", delay: 1 }}
            drag
            whileDrag={{ scale: 0.75 }}
            dragMomentum={false}
            className="titlefont m-5 justify-content-center"
          >
            {choice}
          </motion.h1>
        </motion.div>{" "}
        {dinnerTonight.map((rs, i) => (
          <div key={`restaurant-div-${i}`} className="flex flex-row col-7">
            <label htmlFor="customRange1" className="form-label">
              {rs.name}
            </label>

            <input
              className=" form-range"
              onChange={handleRange}
              name={rs.name}
              type="range"
              step={0.05}
              value={rs.weight}
              max={1}
              id="customRange1"
            />
          </div>
        ))}
      </div>
      <motion.button
        onClick={!choice ? calculateRandomChoice : (e) => setChoice("")}
        whileTap={{ scale: 0.95 }}
        className="m-5 btn btn-dark"
      >
        {!choice ? "Get a random Choice" : <span>Choose Again?</span>}
      </motion.button>
    </div>
  );
}

export default App;
