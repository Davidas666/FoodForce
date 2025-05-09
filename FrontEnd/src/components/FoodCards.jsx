import React, { useState } from 'react';

const FoodCards = ({ initialTitle,  initialDescription }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  // const [image, setImage] = useState(initialImage);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      style={{ ...styles.card, ...(isOpen ? styles.openCard : {}) }} 
      onClick={toggleCard}
    >
      <img src='../img/FF_Order_Now.png' />

      {!isOpen ? (
        <h3 style={styles.title}>{title}</h3>
      ) : (
        <div style={styles.content}>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            style={styles.input}
          />
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            style={styles.textarea}
          />

          {/* Pasirinkimas nuotraukai */}
          
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    width: '350px',
    height: '350px',
    border: '2px solid #ccc',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
  },
  openCard: {
    width: '550px',
    height: '550px',
    padding: '2rem',
    alignItems: 'flex-start',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  title: {
    margin: '10px 0',
    fontSize: '16px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  input: {
    fontSize: '18px',
    marginBottom: '10px',
    padding: '5px',
  },
  textarea: {
    fontSize: '16px',
    width: '100%',
    height: '100px',
    padding: '5px',
  },
  select: {
    fontSize: '14px',
    marginTop: '10px',
    padding: '5px',
  },
};

export default FoodCards;
