import React from 'react';
import { useState } from 'react';

const FoodBox = ({ food, addToList }) => {
  const { image, name, calories, quantity } = food;
  const [quantityInput, setQuantityInput] = useState(quantity);
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt="" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                min="0"
                value={quantityInput}
                onChange={(e) => {
                  setQuantityInput(e.target.value);
                }}
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={() => {
                  addToList({ name, quantity: +quantityInput, calories });
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
