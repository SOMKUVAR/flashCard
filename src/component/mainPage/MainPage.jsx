import React from 'react';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CreateFlashCard from '../FlashCard/createFlashCard/CreateFlashCard'
import MyFlashCard from '../FlashCard/myFlashCard/MyFlashCard';
import './MainPage.css';

const MainPage = () => {
    const [isFirstLinkActive, setisFirstLinkActive] = useState(true);
    return (
        <div className="container-fluid my-12 mx-24">
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
        </div>

    )
};
export default MainPage;
