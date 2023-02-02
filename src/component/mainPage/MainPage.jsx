import React from 'react'
import CreateFlashCard from '../createFlashCard/CreateFlashCard'
import { MyFlashCard } from '../myFlashCard/MyFlashCard'

export const MainPage = () => {
    return (
        <div className="container-fluid my-12 mx-20">
            <h2 className="text-xl text-black font-bold">Create Flash Card</h2>
            <div>
                
            </div>
            <CreateFlashCard/>
            <MyFlashCard/>
        </div>
    )
}
