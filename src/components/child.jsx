import React from 'react';

function Child(props){

    return(
        <>
        <h1>{props.count}</h1>
        <button onClick={(e)=>{props.increment(e)}}>increment</button>

        <button onClick={(e)=>{props.devide(e)}}>devide</button>

        <button onClick={(e)=>{props.multiply(e)}}>multiplie</button>

        </>
    )
}


export default Child;