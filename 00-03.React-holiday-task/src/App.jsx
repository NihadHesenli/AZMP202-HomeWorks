import { Route, Routes } from 'react-router-dom'
import './App.css'
import ClientLayout from './layout/Client/ClientLayout'
import AdminLayout from './layout/Admin/AdminLayout'
import Home from './pages/Client/Home/Home'
import Products from './pages/Client/Products/Products'
import Details from './pages/Client/ProductDetails/Details'
import Favorites from './pages/Client/Favorites/Favorites'
import Basket from './pages/Client/Basket/Basket'
import DashBoard from './pages/Admin/Dashboard/index'
import AdminProd from './pages/Admin/AdminProd/AdminProd'
import AddProd from './pages/Admin/AddProd/AddProd'
import NotFound from './companents/NotFound'

function App() {

  return (
    <Routes>

      <Route path='/' element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path='/products'>
          <Route index element={<Products />} />
          <Route path=':id' element={<Details />} />
        </Route>
        <Route path='/favorites'>
          <Route index element={<Favorites />} />
          <Route path=':id' element={<Details />} />
        </Route>
        <Route path='/basket' element={<Basket />} />
      </Route>

      <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<DashBoard />} />
        <Route path='/admin/product-list' element={<AdminProd />} />
        <Route path='/admin/add-product' element={<AddProd />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
