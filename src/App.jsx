import {useReducer} from "react";
import './App.css';
import Rezepte from './assets/Rezepte';
import Rezept from './assets/Rezept';
// console.log(steps.length)
export const ACTIONS = {
  TOGGLE_STEP: 'toggle-step',

}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_STEP:
      return todos.map(todo => {
        if(todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
      default:
        console.warn("Unknown action")
      }
      return state     
}
    
function App() {
  const [ state, dispatch ] = useReducer(reducer, Rezepte)
  
  return (
    <div className="App">
      <>
        {state.map((rezept, index) =>{
          return <Rezept rezept={rezept} key={index} dispatch={dispatch} />
        })}
      </>

   
    </div>
  )
}

export default App
