import React from 'react';

const TodaysFood = ({ today }) => {
  console.log(today);
  today.reduce((acc, curr) => {
    console.log('the current calories is ', curr.calories);
    return acc + curr.calories * Number(curr.quantity);
  }, 0);
  return (
    <div>
      <h2>Todays Food</h2>
      <ul>
        {today.map((newFood) => {
          return (
            <li key={newFood.name}>
              {newFood.quantity} {newFood.name} ={' '}
              {newFood.calories * newFood.quantity} Cal
            </li>
          );
        })}
      </ul>
      <h3>
        Total Calories:
        {today.reduce((acc, curr) => {
          return acc + curr.calories * curr.quantity;
        }, 0)}
      </h3>
    </div>
  );
};

export default TodaysFood;
