import React from 'react';
// import Icon from "./Icon";
import './App.css';

export default function App() {
    const icons = [];
    for (let i=1; i<=5; i++) {
        for(let j=1; j<=12; j++)
        icons.push(<div className={`icon-${i}-${j}`} key={`icon-${i}-${j}`}/>)
    }
    console.log(icons);
  return (
      <section className='icon-container'>
          {icons}
      </section>

  );
}

