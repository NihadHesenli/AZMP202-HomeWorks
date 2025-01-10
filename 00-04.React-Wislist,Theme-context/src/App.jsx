import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Favorites from './pages/Favorites'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext/ThemeContext'

function App() {

  const {them} = useContext(ThemeContext)

  return (
    <>
    <div style={{ backgroundColor: them === "light" ? "white" : "black", color: them === "light" ? "black" : "white" }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
