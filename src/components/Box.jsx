import React from 'react'
import './my.css'


const Box = ({ value, clickHandle, index }) => {
    const style = value === "X" ? "box x" : "box o";

    return (
        <button onClick={() => clickHandle(index)} className={style}>{value}</button>

    )
}

export default Box