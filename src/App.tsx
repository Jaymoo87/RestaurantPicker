import { useState, useRef } from "react";
import "./App.css";
import { animated, useSpring } from "@react-spring/web";

function App() {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });

  const [choice, setChoice] = useState("");
  const [restaurants, setRestaurants] = useState([
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
    const temp = Array.from(restaurants);
    const index = temp.findIndex((rs) => rs.name === e.target.name);
    temp[index].weight = e.target.valueAsNumber;
    setRestaurants(temp);
  };

  const calculateRandomChoice = () => {
    const allChoices = restaurants.map((rs) => new Array(Math.round(rs.weight * 20)).fill(rs.name)).flat();
    const randomChoice = allChoices[Math.floor(Math.random() * allChoices.length)];
    setChoice(randomChoice);
  };

  return (
    <div>
      <animated.h1
        style={{
          width: 600,
          height: 200,
          background: "#a01515",
          borderRadius: 8,
          alignContent: "center",
          ...springs,
        }}
      >
        {choice}
      </animated.h1>
      <button onClick={!choice ? calculateRandomChoice : (e) => setChoice("")}>
        {!choice ? "Get a random Choice" : <span>Choose Again?</span>}
      </button>

      {restaurants.map((rs, i) => (
        <div className="container">
          <div key={`restaurant-div-${i}`}>
            <label>{rs.name}</label>
            - <input onChange={handleRange} name={rs.name} type="range" step={0.05} value={rs.weight} max={1} /> +
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
