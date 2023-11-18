import React from "react";
import './inputBox.scss'
import { AutoHeightTextarea } from "./textarea";

export const MyInput = ({label, type, changer, error, labelConsists}) => {
    const changed = (e) => {
        changer(e)
    }

    return (
        <>
        <div className="myinput">
            {type === 'textarea' 
            ? 
              (  <AutoHeightTextarea changed={changed} id='input' clas={error ? 'error' : 'input'}/> )
            : <input 
                    className={error ? 'error' : 'input'}
                    type={type}
                    onChange={(e) => changed(e.target.value)}
                />
            }
            <br/>
            <label htmlFor="input" className={error? "label-error" : ''}>
                {(labelConsists && !error) ? '' : label}
            </label><br/>
        
        </div>
         </>
    )
}