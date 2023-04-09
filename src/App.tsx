import { useState, useRef } from "react";
import "./App.css";
import { animated, useSpring } from "@react-spring/web";
import { motion } from "framer-motion";

function App() {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });

  const [choice, setChoice] = useState("");
  const [dinnerTonight, setDinnerTonight] = useState([
    { name: "La Hacienda", weight: 0.5 },
    { name: "Jack's", weight: 0.5 },
    { name: "McDonalds", weight: 0.5 },
    { name: "306 BBQ", weight: 0.5 },
    { name: "Waffle House", weight: 0.5 },
    { name: "Rice Box", weight: 0.5 },
    { name: "Texas Roadhouse", weight: 0.5 },
    { name: "Taco Mama", weight: 0.5 },
    { name: "Stanfields", weight: 0.5 },
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
    <div className="container">
      {" "}
      <motion.div style={{ margin: "5px", justifyContent: "center" }}>
        <motion.h1 layout transition={{ type: "spring" }} drag whileDrag={{ scale: 0.75 }} dragMomentum={false}>
          {choice}
        </motion.h1>
      </motion.div>
      {dinnerTonight.map((rs, i) => (
        <div className="container">
          <div key={`restaurant-div-${i}`}>
            <label>{rs.name}</label>
            - <input onChange={handleRange} name={rs.name} type="range" step={0.05} value={rs.weight} max={1} /> +
          </div>
        </div>
      ))}
      <motion.button
        style={{ margin: "5px" }}
        onClick={!choice ? calculateRandomChoice : (e) => setChoice("")}
        whileTap={{ scale: 0.95 }}
      >
        {!choice ? "Get a random Choice" : <span>Choose Again?</span>}
      </motion.button>
    </div>
  );
}

export default App;
