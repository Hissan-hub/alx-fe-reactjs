export default function Login() {
  localStorage.setItem("auth", "true");
  return <h2>You are now logged in</h2>;
}