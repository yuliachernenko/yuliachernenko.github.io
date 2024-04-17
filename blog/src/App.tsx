import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const jsxEL = <h1> I am a JSX element</h1>;
// const Header = (
//   <header>
//     <h1> Hello world</h1>
//     <h2>Hi there</h2>
//     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus dolore unde quas eligendi fugiat facilis cupiditate eos ratione repudiandae vero nulla dolores quisquam ducimus, rem maxime officiis earum consequatur fuga.</p>
// </header>
// )
    
// const H1 = <h1> Hello world</h1>;
// const H2 = <h2>Hi there</h2>;

const data = {
  H1: <h1> Hello world</h1>,
  H2: <h2>Hi there</h2>
}
const Header = (
  <header>
    {data.H1}
    {data.H2}
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus dolore unde quas eligendi fugiat facilis cupiditate eos ratione repudiandae vero nulla dolores quisquam ducimus, rem maxime officiis earum consequatur fuga.</p>
</header>
)

function App() {
  const [count, setCount] = useState(0)
let today = new Date()
  return (
    <>
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

      {jsxEL}

      {Header}

      <h3 style={{backgroundColor: 'blue', color:'gold'}}>It's today: {today.toLocaleDateString()}</h3>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App