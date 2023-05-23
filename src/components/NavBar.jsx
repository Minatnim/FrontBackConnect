import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function NavBar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const hdlLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <nav className=" flex gap-3">
      {user ? (
        <>
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="/addtodo">
            Add Job
          </NavLink>
          <NavLink
            className="navlink"
            style={{ display: "none" }}
            to="/updatetodo/1"
          >
            Edit Job
          </NavLink>

          <div className="navlink cursor-pointer" onClick={hdlLogout}>
            Logout
          </div>
        </>
      ) : (
        <>
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="/login">
            Login
          </NavLink>
          <NavLink className="navlink" to="/register">
            Register
          </NavLink>
        </>
      )}
    </nav>
  );
}
