import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>

      <Link to="details">Details</Link>
      <br />
      <Link to="settings">Settings</Link>

      <Outlet />
    </div>
  );
}