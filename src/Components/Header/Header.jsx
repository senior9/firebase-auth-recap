import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authProvider } from "../Provider/UserProvider";

const Header = () => {
  const { user, logOut } = useContext(authProvider);
  // console.log(logOut)

  const handleSignOut = () => {
    logOut()
      .then((result) => {})
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          daisyUI
        </Link>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to="login" className="btn btn-ghost normal-case text-xl">
          Register
        </Link>
        {user && (
          <Link to="/orders" className="btn btn-ghost normal-case text-xl">
            Order
          </Link>
        )}
        {user ? (
          <>
            <span className="mx-5">{user.email}</span>
            <button
              onClick={handleSignOut}
              className="btn btn-outline btn-secondary"
            >
              Sign out
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-ghost">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
