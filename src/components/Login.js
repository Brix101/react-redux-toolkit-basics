import React from "react";

// redux hook
import { useDispatch } from "react-redux";
// import action on feature
import { login, logout } from "../features/user";

function Login() {
  const dispatch = useDispatch();

  const loginClick = () => {
    dispatch(login({ name: "Brix", age: 23, email: "brix@gmail.com" }));
  };
  return (
    <div>
      <button onClick={loginClick}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default Login;
