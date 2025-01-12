import { Route, Routes } from 'react-router-dom'
import './App.css'
import ClientLayout from '../layout/Client/ClientLayout'
import Home from '../pages/Client/Home'
import Favorites from '../pages/Client/Wishlist'
import AdminProd from '../pages/Admin/AdminProducts'
import AdminLayout from '../layout/Admin'

function App() {

  return (
    <Routes>
      <Route path='/' element={<ClientLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      </Route>

      <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<AdminProd/>}/>
        </Route>
    </Routes>
  )
}

export default App
