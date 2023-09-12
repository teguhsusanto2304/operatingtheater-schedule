import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav >
        <ul class="nav">
          <li class="nav-item">
            <Link to="/" class="nav-link">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/Calendar" class="nav-link">Schedule</Link>
          </li>
        </ul>
      </nav>
      

      <Outlet />
    </>
  )
};

export default Layout;