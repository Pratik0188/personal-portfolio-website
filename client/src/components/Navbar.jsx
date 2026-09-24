import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';       // kept for future use
// import { useAuth } from '../context/AuthContext.jsx'; // kept for future use

export default function Navbar() {
  // const { isAuthenticated, logout } = useAuth();
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   logout();
  //   navigate('/');
  // };

  return (
    <nav className="navbar">
      <strong>Pratik Pujara</strong>
      <div className="navbar__links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        {/*
        {isAuthenticated ? (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <button className="btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
        */}
      </div>
    </nav>
  );
}