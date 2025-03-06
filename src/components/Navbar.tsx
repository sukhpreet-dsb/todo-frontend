import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/useAuthStore";

const Navbar = () => {
  const { accessToken } = useStore();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   setIsAuthenticated(!!localStorage.getItem("token"));
  // }, []);
  return (
    <>
      <nav className="bg-indigo-600 py-3 text-white">
        <div className="container-custom flex items-center flex-wrap justify-between gap-2">
          <h2 className="font-bold">Todo App</h2>
          <ul className="flex items-center gap-4 flex-wrap">
            <Link to="/">Home</Link>
            {!accessToken && (
              <>
                <Link to="/sign-in">SignIn</Link>
                <Link to="/sign-up">SignUp</Link>
                <Link to="/reset-password">Reset Password</Link>
                {/* <Link to="/test">Test</Link> */}
                {/* <Link to="/cart" className="relative">
                  Cart
                  {items.length >= 1 && (
                    <div className="absolute right-[-16px] top-[-8px] bg-red-700 rounded-full flex items-center justify-center w-5 h-5">
                      <p className="text-xs">{items.length}</p>
                    </div>
                  )}
                </Link> */}
              </>
            )}
            {accessToken && <Link to="/dashboard">Dashboard</Link>}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
