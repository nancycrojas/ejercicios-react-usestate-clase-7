import { useState } from 'react';
import { themes } from '../../data/themes';

import './Style.css';

export const ExerciseTheme = () => {
  const [theme, setTheme] = useState(themes[0]);

  const {nombre, ...selectedTheme} = theme;

  const handleTheme = () => {
    let randomTheme = themes[Math.floor(Math.random() * themes.length)]
    //para que no se repita
    if(randomTheme.nombre === theme.nombre) {
        randomTheme = themes[Math.floor(Math.random() * themes.length)]
    }

    setTheme(randomTheme);
  }

  return (
    <section style={selectedTheme}>
        <h2>Clase 8 - Ejercicio 3</h2>
        <h3>Estas usando el {nombre}</h3>
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repudiandae delectus beatae alias accusamus dolore nisi! Aliquam quasi magnam sunt ea facilis? Et in deserunt dolore facere praesentium? Sed, fugiat!
            </p>
            <button onClick={handleTheme}>Cambiar tema</button>
        </div>
    </section>
  );
};
