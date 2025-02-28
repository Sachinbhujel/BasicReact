import React, { useState } from 'react';
import './App.css';
import Search from './Search';
import StoryBar from './StoryBar';
import Trending from './Trending';
import Profile from './Profile';

function Bottom() {
    const [active, setActive] = useState("home");

    const handleClick = (tab) => {
        if (active !== tab) {
            setActive(tab);
        }
    };

    return (
        <>
            {/* Show StoryBar by default, but prevent re-render on Home click */}
            {active === "home" && <StoryBar />}
            {active === "search" && <Search />}
            {active === "trending" && <Trending />}
            {active === "profile" && <Profile />}

            {/* Bottom Navigation */}
            <div className='bottom_bar'>
                <div className={`home ${active === "home" ? "active" : ""}`} onClick={() => handleClick("home")}>
                    <span className="material-symbols-outlined">home</span>
                </div>
                <div className={`search ${active === "search" ? "active" : ""}`} onClick={() => handleClick("search")}>
                    <span className="material-symbols-outlined">search</span>
                </div>
                <div className='plus'>+</div>
                <div className={`trending ${active === "trending" ? "active" : ""}`} onClick={() => handleClick("trending")}>
                    <span className="material-symbols-outlined">trending_up</span>
                </div>
                <div className={`profile ${active === "profile" ? "active" : ""}`} onClick={() => handleClick("profile")}>
                    <span className="material-symbols-outlined">person</span>
                </div>
            </div>
        </>
    );
}

export default Bottom;