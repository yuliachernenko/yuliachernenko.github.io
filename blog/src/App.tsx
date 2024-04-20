import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello, {Calc} from './components/Hello';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Footer from './components/Footer';


function Welcome(props: any) {
  return <h1>Hello, {props.name}</h1>
}

 

function App() {
  const [count, setCount] = useState(0)
let today = new Date()
  return (
    <>
      <Navbar/>
      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {/* {jsxEL}

      {JSXfragment} */}

      {/* <Welcome></Welcome> */}

     <Gallery/>
     
      <Welcome name="React component" />
      <Welcome name="world"/>
      <Calc name="Calc" a={77} b={55} />
      <Hello name="Hello component"/>
      <h3 style={{backgroundColor: 'blue', color:'gold'}}>It's today: {today.toLocaleDateString()}</h3>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    <Footer/>
    </>
  )
}

export default App
