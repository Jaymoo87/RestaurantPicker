import { useState } from 'react';

import { motion } from 'framer-motion';

function App() {
  const weight: number = 0.5;

  const [selectedMeat, setSelectedMeat] = useState('');
  const [selectedVeg, setSelectedVeg] = useState('');

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
    setSelectedMeat(randomMeatChoice);
  };

  const calculateRandomVegChoice = () => {
    const vegChoices = vegChoice.map((rs) => new Array(Math.round(rs.weight * 20)).fill(rs.name)).flat();
    const randomVegChoice = vegChoices[Math.floor(Math.random() * vegChoices.length)];
    setSelectedVeg(randomVegChoice);
  };

  return (
    <div className="container text-center containerbg">
      <h1 className="titlefont">What's For dinner?</h1>

      <div className="row ">
        <div className="col tablebg p-5 rounded m-5">
          {meatChoice.map((rs, i) => (
            <div key={`meat-${i}`} className="itemfont">
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
          <motion.div>
            <motion.h1
              layout
              transition={{ type: 'spring', delay: 1 }}
              drag
              whileDrag={{ scale: 0.75 }}
              dragMomentum={false}
              className="titlefont m-5 "
            >
              {selectedMeat}
            </motion.h1>
          </motion.div>{' '}
          <motion.button
            onClick={!selectedMeat ? calculateRandomMeatChoice : (e) => setSelectedMeat('')}
            whileTap={{ scale: 0.95 }}
            className="m-5 btn btn-dark"
          >
            {!selectedMeat ? 'Get a random Meat' : <span>Choose Again?</span>}
          </motion.button>
        </div>

        <div className="col tablebg p-5 rounded m-5">
          {vegChoice.map((rs, i) => (
            <div key={`restaurant-div-${i}`} className="itemfont">
              <label htmlFor="customRange1" className="form-label">
                {rs.name}
              </label>

              <input
                className=" form-range rounded p-2 text-warning"
                onChange={handleVegRange}
                name={rs.name}
                type="range"
                step={0.05}
                value={rs.weight}
                max={1}
                id="customRange1"
              />
            </div>
          ))}
          <motion.div>
            <motion.h1
              layout
              transition={{ type: 'spring', delay: 1 }}
              drag
              whileDrag={{ scale: 0.75 }}
              dragMomentum={false}
              className="titlefont m-5 justify-content-center"
            >
              {selectedVeg}
            </motion.h1>
          </motion.div>{' '}
          <motion.button
            onClick={!selectedVeg ? calculateRandomVegChoice : (e) => setSelectedVeg('')}
            whileTap={{ scale: 0.95 }}
            className="m-5 btn btn-dark"
          >
            {!selectedVeg ? 'Get a random Side' : <span>Choose Again?</span>}
          </motion.button>
        </div>
      </div>
      <div className="flex justify-between"></div>
    </div>
  );
}

export default App;
