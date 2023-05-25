import React from 'react'
import Box from './Box'
import './my.css'
const Board = ({ board, clickHandle }) => {
    return (
        <div className='board'>
            {
                board.map((b, index) => {
                    return <Box value={b} index={index} clickHandle={clickHandle} />
                })
            }
        </div>
    )
}

export default Board