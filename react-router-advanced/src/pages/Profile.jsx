import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <Link to="details">Details</Link><br/>
      <Link to="settings">Settings</Link>
      <Outlet />
    </div>
  );
}