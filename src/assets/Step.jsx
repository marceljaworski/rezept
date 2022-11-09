import React from 'react';

export default function Step({step, index}) {
  console.log(index) 
  return (
    <>
      <p>{++index}. Step: {step}</p>
      <button onClick={()=> {dispatch({type:"checkStep", payload:i})}}>erledigt</button>
    </>
  )
}
