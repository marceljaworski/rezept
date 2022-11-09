import {useReducer} from "react";
import './App.css';
import Rezept from './assets/Rezept';
// import Step from './assets/Step';
const steps = Rezept[0].steps;
// console.log(steps.length)
console.log(typeof steps)
// const steps = Rezept[0].steps.map((s, index) => {
//   return <Step text={s} keys={index} />
// })
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "picture":
//       state = {
//         ...state,
//         inputEmail: action.value
//       }
//       break;
//     default:
//       console.warn("Unknown action")
//   }
//   return state     
// }
function App() {
  // const [ state, dispatch ] = useReducer(reducer, Rezept)
  // console.log(state)

  return (
    <div className="App">
      <h1>{Rezept[0].name}</h1>
      <img src={Rezept[0].picture} alt="" />
      {/* {steps} */}
      <p>STEP 1. : {Rezept[0].steps[0]}</p>
      <p>STEP 2. : {Rezept[0].steps[1]}</p>
      <p>STEP 3. : {Rezept[0].steps[2]}</p>
      
    </div>
  )
}

export default App
