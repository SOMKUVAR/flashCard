import React from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { Link, useParams } from 'react-router-dom';


const FlashCardDetail = () => {
    const params = useParams();
    const flashCard = JSON.parse(localStorage.getItem('flashCards'))[params.id]||[];
   
  return (
    <div>
       <h1 className='flex font-bold mb-3'><Link to='/myFlashCard'><HiArrowLeft className='text-xl mr-3 mt-1' /></Link> {flashCard.createGroup.create_Group} </h1>
       <p className='ml-7 mb-4 text-medium text-neutral-600 dark:text-neutral-200 '>{flashCard.createGroup.description}</p>
       <div className='grid grid-cols-3 gap-4 '></div>
    </div>
  )
}

export default FlashCardDetail;