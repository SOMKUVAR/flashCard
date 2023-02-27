import React from 'react'
import FlashCard from '../component/flash-card/FlashCard';

const FlashCards = () => {
    const flashCards = JSON.parse(localStorage.getItem('flashCards'))||[];
   
    return (
        <div className='pt-8 grid  md:grid-cols-2 xl:grid-cols-3 gap-10'> 
         {
          flashCards.map((flashCard,index) => <FlashCard flashCard={flashCard} index={index}/>)
         }
        </div>
    )
}

export default FlashCards;
