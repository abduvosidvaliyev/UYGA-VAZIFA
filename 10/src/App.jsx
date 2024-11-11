import Countrey from './countrey'

const App = () => {
  return (
    <>
      <Countrey/>
    </>
  )
}

export default App




















// import { useState } from "react"


// const App = () => {

//   const [state, setState] = useState(0)

//   function random() {
//     setState(Math.floor(Math.random() * 500))
//   }

//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={random}>click</button>
//     </div>
//   )
// }

// export default App

// 2 topshiriq

// import { useState } from "react"

// const App = () => {

//   const [state, setState] = useState(0)

//   return (
//     <section className="home" style={{background: state}}>
//       <button onClick={() => setState("red")}>red</button>
//       <button onClick={() => setState("#000")}>black</button>
//     </section>
//   )
// }

// export default App

// 3 topshiriq

// import { useState } from "react"

// const App = () => {

//   const [state, setState] = useState(0)

//   return (
//     <section className="home">
//       <div style={{background: "red", opacity: state }}>
//       </div>
//       <button onClick={() => setState(0)}>0</button>
//       <button onClick={() => setState(1)}>1</button>
//     </section>
//   )
// }

// export default App

// 4 topshiriq

// import { useState } from "react"

// const App = () => {

//   const [state, setState] = useState("")

//   return (
//     <>
//       <section className="home">
//         <button onClick={() => setState("red")} style={{background: state}}>red</button>
//         <button onClick={() => setState("green")} style={{background: state}}>green</button>
//         <button onClick={() => setState("blue")} style={{background: state}}>blue</button>
//         <button onClick={() => setState("orange")} style={{background: state}}>orange</button>
//         <button onClick={() => setState("yellow")} style={{background: state}}>yellow</button>
//         <button onClick={() => setState("dodgerblue")} style={{background: state}}>dodgerblue</button>
//         <button onClick={() => setState("aqua")} style={{background: state}}>aqua</button>
//         <button onClick={() => setState("brown")} style={{background: state}}>brown</button>
//         <button onClick={() => setState("blueviolet")} style={{background: state}}>blueviolet</button>
//         <button onClick={() => setState("chartreuse")} style={{background: state}}>chartreuse</button>
//       </section>
//     </>
//   )
// }

// export default App
