import React, {useState} from 'react'
import './App.css'

function Bottom(){
    const [active, setActive] = useState("home");

    return(
        <>
          <div className='bottom_bar'>
            <div className={`home ${active === "home" ? "active" : ""}`} onClick={() => setActive("home")}>
                <span class="material-symbols-outlined">
                    home
                </span>
            </div>
            <div className={`search ${active === "search" ? "active" : ""}`} onClick={() => setActive("search")}>
                <span class="material-symbols-outlined">
                    search
                </span>
            </div>
            <div className='plus'>
                +
            </div>
            <div className={`trending ${active === "trending" ? "active" : ""}`} onClick={() => setActive("trending")}>
                <span class="material-symbols-outlined">
                    trending_up
                </span>
            </div>
            <div className={`profile ${active === "profile" ? "active" : ""}`} onClick={() => setActive("profile")}>
                <span class="material-symbols-outlined">
                    person
                </span>
            </div>
          </div>
        </>
    )
}

export default Bottom