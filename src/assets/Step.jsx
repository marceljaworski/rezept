import React from 'react';

export default function Step({step}) {
  return (
    <>
      <p>{step}</p>
      <button onClick={()=> {dispatch({type:"checkStep", payload:i})}}></button>
           
    </>
  )
}
