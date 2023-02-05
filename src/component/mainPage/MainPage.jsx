import React from 'react';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CreateFlashCard from '../FlashCard/createFlashCard/CreateFlashCard'
import MyFlashCard from '../FlashCard/myFlashCard/MyFlashCard';
import RedButton from '../Layout/RedButton';
import './MainPage.css';

const MainPage = () => {
    const [isFirstLinkActive, setisFirstLinkActive] = useState(true);
    return (
        <div className="container my-9 mx-auto">
            <div className="flex flex-wrap justify-center">
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-9/12 px-3">
                    <h2 className="text-xl text-black font-bold">Create Flash Card</h2>
                    <div className="my-3" data-testid="links">
                        <Link data-testid="createFlashCard-link" to="/" className={`line-hover ${isFirstLinkActive ? 'active' : ''}`} onClick={() => setisFirstLinkActive(true)}>Create New </Link>
                        <Link data-testid="myFlashCard-link" to="/myFlashCard" className={`line-hover ${isFirstLinkActive ? '' : 'active'}`} onClick={() => setisFirstLinkActive(false)}>My FlashCard </Link>
                        <hr />
                    </div>
                    <Routes>
                        <Route path="/" element={<CreateFlashCard />}></Route>
                        <Route path="/myFlashCard" element={<MyFlashCard />}></Route>
                    </Routes>
                    <div className="flex flex-wrap justify-center">
                   <RedButton>Create</RedButton>
                   </div>
                </div>
            </div>
        </div>

    )
};
export default MainPage;
