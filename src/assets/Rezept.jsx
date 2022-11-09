import React from 'react'
import Step from './Step'


export default function Rezept({ rezept, dispatch}){
    
    return (
        <>
            <h1>{rezept.name}</h1>
            <img src={rezept.picture} alt="" />
            {rezept.steps.map((step, index) => {
                return <Step step={step} key={index} index={index} dispatch={dispatch} />
            })}
      
        </>

    );
} 