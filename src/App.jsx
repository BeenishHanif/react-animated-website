import Navbar from './Navbar'
import Slider from './Slider'
import Contact from './Contact'
import About from './About'
import Services from './Services'
import Footer from './Footer'
import SignupLogin from './SignupLogin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'

function App() {

  return (
    < >
    <BrowserRouter>
   <Routes>
   <Route  path='/' element={<Home/>}></Route>
   <Route exact path='/signup' element={<SignupLogin/> }></Route>
   </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
