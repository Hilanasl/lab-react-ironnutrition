import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import json from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import Search from './components/Search';
import TodaysFood from './components/TodaysFood';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [foods, setFoods] = useState([...json]);
  const [searchedString, setSearchedString] = useState('');
  const [today, setTodays] = useState([]);

  function addFood(infos) {
    console.log('infos', infos);
    setFoods([...foods, infos]);
  }

  let searchedFood = null;
  if (searchedString !== '') {
    searchedFood = foods.filter((item) => {
      return item.name.toLowerCase().includes(searchedString.toLowerCase());
    });
  } else {
    searchedFood = foods;
  }
  console.log(searchedFood);

  const addToList = (newFood) => {
    console.log(newFood);
    setTodays([...today, newFood]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>IronNutrition</h1>
        <div>
          <button onClick={() => setShowForm(!showForm)}>Add New Food</button>

          {showForm && <Form addFood={addFood} />}
        </div>
        <Search
          searchedString={searchedString}
          callbackSearch={setSearchedString}
        />
        {searchedFood.map((food) => {
          return (
            <div key={food.name}>
              <FoodBox addToList={addToList} food={food} />
            </div>
          );
        })}
        <div>
          <TodaysFood today={today} />
        </div>
      </div>
    </div>
  );
}

export default App;
