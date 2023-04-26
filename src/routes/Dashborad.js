import { Outlet } from "react-router-dom";

function Dashborad() {
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <Outlet />
    </div>
  );
}

export default Dashborad;
