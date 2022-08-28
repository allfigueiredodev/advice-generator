import './quote.css'
import React from 'react'

function Quote ({quote}) {

    return (
        <h2 className='quote'>
            {quote}
        </h2>
    )
}

export default Quote
