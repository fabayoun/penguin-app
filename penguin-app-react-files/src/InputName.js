import React from "react";
import "./InputName.css";
import { useState } from "react";
import ButtonPenguin from "./Button";
import { Button } from "react-bootstrap";

function InputName() {
  const [update, setUpdate] = useState("");

  const handleChange = (event) => {
    setUpdate(event.target.value);

    console.log("value is:", event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="text-box"
        onChange={handleChange}
        value={update}
      />
      <ButtonPenguin passedData={update} />
    </div>
  );
}

export default InputName;
