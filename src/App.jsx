import React from 'react';
import { useState,useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './component/NavBar';
import './styles/MainPage.css';
import FlashCardDetail from './pages/FlashCardDetail';
import FlashCards from './pages/FlashCards';
import CreateFlashCard from './pages/CreateFlashCard';

function App() {
  const [isFirstLinkActive, setisFirstLinkActive] = useState(true);
  const location = useLocation();
  useEffect(()=>{
      if(location.pathname === '/')
        setisFirstLinkActive(true);
      else
       setisFirstLinkActive(false);
  },[location.pathname])
  return (
    <div className='bg-red-50'>
         <NavBar/>
         <div className="container my-5 mb-3 mx-auto">
            <div className="flex flex-wrap justify-center">
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-9/12 px-3">
                    <h2 className="text-xl text-black font-bold">Create Flash Card</h2>
                    <div className="my-3" data-testid="links">
                        <Link data-testid="createFlashCard-link" to="/" className={`line-hover ${isFirstLinkActive ? 'active' : ''}`} >Create New </Link>
                        <Link data-testid="myFlashCard-link" to="/myFlashCard" className={`line-hover ${isFirstLinkActive ? '' : 'active'}`}>My FlashCard </Link>
                        <hr />
                    </div>
                    <Routes>
                        <Route path="/" element={<CreateFlashCard />}></Route>
                        <Route path="/myFlashCard" element={<FlashCards />}></Route>
                        <Route path="/flash-card/:id" element={<FlashCardDetail />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;


