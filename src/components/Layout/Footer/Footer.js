import { Link } from "react-router-dom"

function Footer() {
  return (
  <div class="container">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <Link to="/" class="nav-link px-2 text-muted">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/event" class="nav-link px-2 text-muted">Calendar</Link>
        </li>
        <li class="nav-item">
          <Link to="/login" class="nav-link px-2 text-muted">Log In</Link>
        </li>
        <li class="nav-item">
          <Link to="/register" class="nav-link px-2 text-muted">Register</Link>
        </li>
        <li class="nav-item">
          <Link to="/about" class="nav-link px-2 text-muted">About</Link>
        </li>
      </ul>
      <p class="text-center text-muted">&copy; kajaiiro</p>
    </footer>
  </div>
  )
}

export default Footer;