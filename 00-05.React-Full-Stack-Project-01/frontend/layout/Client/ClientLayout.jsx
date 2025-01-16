import { Outlet } from "react-router-dom"
import ClientHeader from "../../component/Client/ClientHeader"
import ClientFooter from "../../component/Client/CleintFooter/ClientFooter"
const ClientLayout = () => {
  return (
    <>
    <ClientHeader/>
    <Outlet />
    <ClientFooter/>
    </>
  )
}

export default ClientLayout