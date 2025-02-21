import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, []);
  return (
    <>
      <nav className="bg-indigo-600 py-3 text-white">
        <div className="container-custom flex items-center flex-wrap justify-between gap-2">
          <h2 className="font-bold">Todo App</h2>
          <ul className="flex items-center gap-4 flex-wrap">
            <Link to="/">Home</Link>
            {!isAuthenticated && (
              <>
                <Link to="/sign-in">SignIn</Link>
                <Link to="/sign-up">SignUp</Link>
                <Link to="/reset-password">Reset Password</Link>
              </>
            )}
            {
                isAuthenticated && <Link to="/dashboard">Dashboard</Link>
            }
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
