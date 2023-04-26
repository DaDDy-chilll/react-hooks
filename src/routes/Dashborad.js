import { Outlet } from "react-router-dom";

function Dashborad({ user }) {
  return (
    <div>
      <h1>Hello, {user}</h1>
      <h2>Welcome to Dashboard</h2>
      <Outlet />
    </div>
  );
}

export default Dashborad;
