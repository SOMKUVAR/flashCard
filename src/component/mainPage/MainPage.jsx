import React from 'react'
import CreateFlashCard from '../createFlashCard/CreateFlashCard'
import { MyFlashCard } from '../myFlashCard/MyFlashCard';
import './MainPage.css';

export const MainPage = () => {
    return (
        <div className="container-fluid my-12 mx-24">
            <h2 className="text-xl text-black font-bold">Create Flash Card</h2>
            <div className="my-3">
                <span className="line-hover">Create New </span>
                <span className="line-hover">My FlashCard </span>
                <hr/>
            </div>
            <CreateFlashCard/>
            <MyFlashCard/>
        </div>
    )
}
