import React from 'react';
import { ACTIONS } from '../App'

export default function Step({step, index, dispatch}) {
  
  return (
    <>
      <p>{++index}. Step: {step}</p>
      <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_STEP, payload: { id: step.id }})}>erledigt</button>
    </>
  )
}
