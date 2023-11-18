import React from "react";
import './switcher.scss'

export const MySwitcher = () => {
    return(
        <>
        <div className="main">
            <label className="switch">
                <input type="checkbox" className="switcher"/>
                <span className="slider"></span>
            </label>
            <div className="message">
                Запомнить сессию
            </div>
        </div>
        </>
    )
}