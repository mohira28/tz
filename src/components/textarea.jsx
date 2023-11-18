import React, { useEffect, useRef, useState} from "react";
import './inputBox.scss'

const defaultStyle = {
    display: "block",
    overflow: "hidden",
    resize: "none",
};


export const AutoHeightTextarea = ({ style = defaultStyle, changed, clas }) => {
    const textareaRef = useRef(null);
    const [currentValue, setCurrentValue ] = useState("");

    useEffect(() => {
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }, [currentValue]);

    const handlechange = (e) => {
        changed(e.target.value)
        setCurrentValue(e.target.value)
    }

    return (
        <textarea
            ref={textareaRef}
            style={style}
            value={currentValue}
            className={clas}
            onChange={(e) => handlechange(e)}  />
    );
};

