import React, { useState } from 'react';
import './App.css';
import Search from './Search';

function Bottom() {
    const [active, setActive] = useState("home");

    return (
        <>
            {/* Conditionally Render Search Component */}
            {active === "search" && <Search />}

            {/* Bottom Navigation */}
            <div className='bottom_bar'>
                <div className={`home ${active === "home" ? "active" : ""}`} onClick={() => setActive("home")}>
                    <span className="material-symbols-outlined">home</span>
                </div>
                <div className={`search ${active === "search" ? "active" : ""}`} onClick={() => setActive("search")}>
                    <span className="material-symbols-outlined">search</span>
                </div>
                <div className='plus'>+</div>
                <div className={`trending ${active === "trending" ? "active" : ""}`} onClick={() => setActive("trending")}>
                    <span className="material-symbols-outlined">trending_up</span>
                </div>
                <div className={`profile ${active === "profile" ? "active" : ""}`} onClick={() => setActive("profile")}>
                    <span className="material-symbols-outlined">person</span>
                </div>
            </div>
        </>
    );
}

export default Bottom;
