import React, { useState } from 'react';
import FoodCards from './FoodCards';

const FoodCardsList = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Skani sriuba', image: 'dish.jpg', description: 'Puikiai subalansuotas skonis!' }
  ]);

  const addNewCard = () => {
    const newCard = { 
      id: cards.length + 1, 
      title: `Naujas patiekalas ${cards.length + 1}`, 
      image: 'dish.jpg', 
      description: 'Aprašymas apie naują patiekalą.'
    };
    setCards([...cards, newCard]);
  };

  return (
    <div>
      <button onClick={addNewCard} style={styles.button}>Pridėti kortelę</button>

      <div style={styles.cardContainer}>
        {cards.map(card => (
          <FoodCards key={card.id} initialTitle={card.title} initialImage={card.image} initialDescription={card.description} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  button: {
    display: 'block',
    margin: '10px auto',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px'
  },
  cardContainer: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
  }
};

export default FoodCardsList;
