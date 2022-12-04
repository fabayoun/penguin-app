import "./Button.css";
import Button from "react-bootstrap/Button";
import AppearingText from "./AppearingText";
import axios from "axios";
import { useState } from "react";

function ButtonPenguin(props) {
  const [name, setName] = useState("No name set yet.");
  const [sentence, setSentence] = useState("No sentence set yet.");

  const sendRequest = () => {
    setName(props.passedData);
    axios.put("http://127.0.0.1:5000/", { name: { name } }).then((response) => {
      console.log(response.data);
    });

    console.log("value is", { sentence });
  };

  return (
    <div>
      <Button
        className="buttonPenguin"
        onClick={sendRequest}
        variant="outline-success"
      >
        Penguin Me!
      </Button>{" "}
      <AppearingText />
    </div>
  );
}

export default ButtonPenguin;
