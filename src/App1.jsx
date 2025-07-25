import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      {/* this is called fragment tag */}
      <h1> Code is running</h1>
      <Text />
      <Text />
      <Com />
      <Text1 display={"What's up"}/>
      <Text1 display={"What's up world"}/>
      {/* NOTE: component first letter should be be capitalize other it will not work */}
    </>
  )
}
function Text(){
  return (
    <div>
      <p>This is a component</p>
    </div>
  );
}
function Com(){
  return (
    <div>
      <p>This is a comp</p>
    </div>
  );
}

function Text1( {display}){
  // property means prop
  //  we can pass prop using {} braces
  // we can prop as we want
  return (
    <div>
      <p> {display}</p>
    </div>
  );

}
export default App
