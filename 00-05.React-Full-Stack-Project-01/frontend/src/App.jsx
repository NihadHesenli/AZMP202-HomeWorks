import { Route, Routes } from 'react-router-dom'
import './App.css'
import ClientLayout from '../layout/Client/ClientLayout'
import Home from '../pages/Client/Home'
import Favorites from '../pages/Client/Wishlist'
import AdminProd from '../pages/Admin/AdminProducts'
import AdminLayout from '../layout/Admin'
import ProductsPage from '../pages/Client/Products'
import Dashboard from '../pages/Admin/DashBoard/Dashboard'
import AddProducts from '../pages/Admin/AddProducts'
import NotFound from '../pages/NotFound'

function App() {

  return (
    <Routes>
      <Route path='/' element={<ClientLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      </Route>

      <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='/admin/product-list' element={<AdminProd/>}/>
          <Route path='/admin/add-product' element={<AddProducts/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App
