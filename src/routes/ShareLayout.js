import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function ShareLayout() {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default ShareLayout;
