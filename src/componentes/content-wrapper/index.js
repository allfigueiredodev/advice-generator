import React, {useState} from 'react';
import './content-wrapper.css'
import PatternDivider from '../pattern-divider';
import AdviceId from '../advice-id';
import Quote from '../quote';
import Botao from '../botao';

function ContentWrapper () {
    const [idResult, setIdResult] = useState('???');
    const [quoteResult, setQuoteResult] = useState ('???');
    
        async function fetchHandler () {
        const APIresponse = await fetch('https://api.adviceslip.com/advice');
        const data = await APIresponse.json();
        
        setIdResult(data.slip.id);
        setQuoteResult(data.slip.advice);
    } 

    return (
        <div className='content-wrapper'>
            <AdviceId advice={idResult} />
            <Quote quote={quoteResult} />
            <PatternDivider />
            <Botao onPress={fetchHandler}/>
        </div> 
    )
}

export default ContentWrapper