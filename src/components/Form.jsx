import React, { useState } from 'react';

const Form = ({ addFood }) => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addFood({ name, calories, image });
    console.log(addFood);
    setName('');
    setCalories('');
    setImage('');
  };

  return (
    <form className="form" onClick={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="calories">Calories:</label>
      <input
        type="number"
        name="calories"
        id="calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />

      <label htmlFor="calories">Image:</label>
      <input
        type="text"
        name="image"
        id="image"
        alt="a new asset"
        value="https://i.imgur.com/eTmWoAN.png"
      />

      <button>Submit</button>
    </form>
  );
};

export default Form;
