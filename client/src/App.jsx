import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
function Routing() {

  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route/>
    <Route/>
    <Route/>
    <Route/>
    <Route/>
    <Route/>
   </Routes>
  )
}

export default Routing
