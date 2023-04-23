import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authProvider } from "../Provider/UserProvider";

const Login = () => {
    const {signIn} = useContext(authProvider); 
    // console.log(signIn)
    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target
        const  email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email,password)
        .then ((result)=>{
            const createUser = result.user
            console.log(createUser);
            form.reset();
        })
        .catch((error) => {
            console.log(error);
            // ..
          });
         
     }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col  ">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    New User?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
