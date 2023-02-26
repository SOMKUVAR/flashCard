import React from 'react';

const NavBar = () => {
    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-white text-white-500 hover:text-white-700 focus:text-white-700 shadow-lg">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6 " >
                <div className="container-fluid">
                    <span className="text-xl text-rose-700 font-semibold">Flash Card</span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
