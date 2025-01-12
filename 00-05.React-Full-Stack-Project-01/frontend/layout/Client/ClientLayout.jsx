import { Outlet } from "react-router-dom"
import ClientHeader from "../../component/Client/ClientHeader"
const ClientLayout = () => {
  return (
    <>
    <ClientHeader/>
    <Outlet/>
    </>
  )
}

export default ClientLayout