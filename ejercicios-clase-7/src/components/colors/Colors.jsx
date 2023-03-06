import { useState } from "react";

export const Colors = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const colors = ["blue", "red", "green", "orange", "brown", "yellow"];

  const changeBackgroundColor = () => {
    setBackgroundColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  document.body.style.background = backgroundColor;

  return (
    <div style={{ backgroundColor }}>
        <h2>Ejercicio 1</h2>
        <button onClick={changeBackgroundColor}>Change color</button>
    </div>
  );
};
