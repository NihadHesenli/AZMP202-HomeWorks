import { Outlet } from "react-router-dom";
import AdminHeader from "../../component/Admin/AdminHeader";

const AdminLayout = () => {
  return (
    <>
    <AdminHeader/>
    <Outlet/>
    </>
  );
}

export default AdminLayout;
