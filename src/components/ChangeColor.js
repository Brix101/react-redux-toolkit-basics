import React from "react";
import { useState } from "react";

// redux hook
import { useDispatch } from "react-redux";
// import action on feature
import { changeColor } from "../features/color";

function ChangeColor() {
  const [color, setColor] = useState("");

  const dispatch = useDispatch();

  const onChangeColor = () => {
    dispatch(changeColor(color));
  };
  return (
    <div>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button onClick={onChangeColor}>Change Color</button>
    </div>
  );
}

export default ChangeColor;
