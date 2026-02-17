import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/profile">Profile</Link><br/>
      <Link to="/post/1">Post 1</Link>
    </div>
  );
}