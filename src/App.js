import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColor from "./components/ChangeColor";

import { useSelector } from "react-redux";

function App() {
  const color = useSelector((state) => state.color.value);
  return (
    <div className="App" style={{ color: color }}>
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
