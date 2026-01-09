import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./opages/Home"
import Dash from "./opages/Dash"
import About from "./opages/About"
import Found from "./opages/Found"
import Slash from "./opages/Slash"


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Slash/>} />
    <Route path="/home" element={<Home/>}/>
      <Route path="/dash" element={<Dash/>} />
        <Route path="about/" element={<About/>}/>
          <Route path="/found" element={<Found/>}/>

   </Routes>
   </BrowserRouter>
  )
}

export default App
