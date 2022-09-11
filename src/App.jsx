import { Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Footer, Navbar, Title } from './pages/Styles'

export default function App() {
  return (
    <>
      <Navbar>
        <Title>
          Super Página
          <span>www.com.br</span>  
        </Title>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
      <Footer>
        <small>Developed by João Bomfim</small>
      </Footer>
    </>
  )
}
