import { useState } from 'react';
import './App.css';

import { motion } from 'framer-motion';

function App() {
  const weight: number = 0.5;
  const [choice, setChoice] = useState('');
  const [meatChoice, setMeatChoice] = useState([
    { name: 'Chicken Wings', weight },
    { name: 'Chicken Breasts', weight },
    { name: 'Chicken Thighs', weight },
    { name: 'Whole Chicken', weight },
    { name: 'New York Strip', weight },
    { name: 'Beef Short Ribs', weight },
    { name: 'Ribeye Steak', weight },
    { name: 'Sirloin Steak', weight },
    { name: 'Filet Mignon', weight },
    { name: 'Pork Chop', weight },
    { name: 'Pork Tenderlion', weight },
    { name: 'Pork Ribs', weight },
    { name: 'Pulled Pork', weight },
    { name: 'Salmon', weight },
    { name: 'Tilapia', weight },
    { name: 'Shrimp', weight },
    { name: 'Crab', weight },
    { name: 'Scallops', weight },
  ]);

  const [vegChoice, setVegChoice] = useState([
    { name: 'Green Beans', weight },
    { name: 'Asparagus', weight },
    { name: 'Corn', weight },
    { name: 'Potatotes', weight },
    { name: 'Sweet Potatotes', weight },
    { name: 'Tomatoes', weight },
    { name: 'Squash', weight },
    { name: 'Zucchini', weight },
    { name: 'Carrots', weight },
    { name: 'Onions', weight },
    { name: 'Green Onions', weight },
    { name: 'Bell Peppers', weight },
    { name: 'Cabbage', weight },
    { name: 'Lettuce', weight },
    { name: 'Black Beans', weight },
    { name: 'Northern Beans', weight },
    { name: 'Pinto Beans', weight },
    { name: 'Olives', weight },
  ]);

  const handleMeatRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temp = Array.from(meatChoice);
    const index = temp.findIndex((rs) => rs.name === e.target.name);
    temp[index].weight = e.target.valueAsNumber;
    setMeatChoice(temp);
  };
  const handleVegRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temp = Array.from(vegChoice);
    const index = temp.findIndex((rs) => rs.name === e.target.name);
    temp[index].weight = e.target.valueAsNumber;
    setVegChoice(temp);
  };

  const calculateRandomMeatChoice = () => {
    const meatChoices = meatChoice.map((rs) => new Array(Math.round(rs.weight * 20)).fill(rs.name)).flat();
    const randomMeatChoice = meatChoices[Math.floor(Math.random() * meatChoices.length)];
    setMeatChoice(randomMeatChoice);
  };

  const calculateRandomVegChoice = () => {
    const vegChoices = vegChoice.map((rs) => new Array(Math.round(rs.weight * 20)).fill(rs.name)).flat();
    const randomVegChoice = vegChoices[Math.floor(Math.random() * vegChoices.length)];
    setVegChoice(randomVegChoice);
  };

  return (
    <div className="container text-center">
      <h1 className="titlefont">What's For dinner?</h1>
      <div className="row justify-content-center justify-between">
        <motion.div>
          <motion.h1
            layout
            transition={{ type: 'spring', delay: 1 }}
            drag
            whileDrag={{ scale: 0.75 }}
            dragMomentum={false}
            className="titlefont m-5 justify-content-center"
          >
            {choice}
          </motion.h1>
        </motion.div>{' '}
        {dinnerTonight.map((rs, i) => (
          <div key={`restaurant-div-${i}`} className="flex flex-row col-7">
            <label htmlFor="customRange1" className="form-label">
              {rs.name}
            </label>

            <input
              className=" form-range"
              onChange={handleMeatRange}
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
        onClick={!choice ? calculateRandomMeatChoice : (e) => setChoice('')}
        whileTap={{ scale: 0.95 }}
        className="m-5 btn btn-dark"
      >
        {!choice ? 'Get a random Choice' : <span>Choose Again?</span>}
      </motion.button>
    </div>
  );
}

export default App;
