
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ClientLayout from './components/Client/ClientLayout'
import Home from './pages/Client/Home'
import Contact from './pages/Client/Contact'
import AdminLayout from './components/Admin/AdminLayout'
import Dashboard from './pages/Admin/Dashboard'
import Users from './pages/Admin/Users'
import AdminProducts from './pages/Admin/Product'
import About from './pages/Client/About'
import Blog from './pages/Client/Blog'
import BlogDetail from './pages/Client/BlogDetail'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<ClientLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='blog'>
        <Route index element={<Blog/>}/>
        <Route path=':id' element={<BlogDetail/>}/>
      </Route>
      <Route path='contact' element={<Contact/>}/>
      </Route>

      <Route path='/admin' element={<AdminLayout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='users' element={<Users/>}/>
      <Route path='products' element={<AdminProducts/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
