import React, { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({ initial, min, max }) => {
  const [counter, setCounter] = useState(parseInt(initial));

  const incrementCounter = () => {
    counter + 1 <= parseInt(max) ? setCounter(counter + 1) : parseInt(max);
  };

  const decrementCounter = () => {
    counter - 1 >= parseInt(min) ? setCounter(counter - 1) : parseInt(min);
  };

  const onAdd = () => {
    console.log(counter);
  };

  return (
    <div className="App">
      <h3>Cantidad</h3>
      <div className="container">
        <button className="btn__decrement" onClick={decrementCounter}>
          <span className="innerbutton">-</span>
        </button>
        <input className="btn__input" type="number" disabled value={counter} />
        <button className="btn__increment" onClick={incrementCounter}>
          <span className="innerbutton">+</span>
        </button>
        <br />
        <br />
      </div>
      <button className="btn__carrito" onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;