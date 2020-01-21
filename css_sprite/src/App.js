import React from 'react';
import './App.css';

export default function App() {

    const renderSprite = (rows,columns) => {
        const icons = [];
        for (let i=1; i<=rows; i++) {
            for(let j=1; j<=columns; j++)
                icons.push(<div className={`icon-${i}-${j}`} key={`icon-${i}-${j}`}/>)
        }
        return icons;
    };

  return (
      <section className='icon-container'>
          {renderSprite(5,12)}
      </section>

  );
}

