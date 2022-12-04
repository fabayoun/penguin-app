import "./Button.css";
import Button from "react-bootstrap/Button";
import AppearingText from "./AppearingText";
import axios from "axios";
import { useState } from "react";

function ButtonPenguin(props) {
  const [name, setName] = useState("");
  const [sentence, setSentence] = useState("");

  const handleHover = () => {
    setName(props.passedData);
    console.log({ name });
  };

  const sendRequest = () => {
    axios.put("http://127.0.0.1:8000/", { name }).then((response) => {
      setSentence(`"${response.data["sentence"]}"`);
    });

    console.log("value is", { sentence });
  };

  return (
    <div>
      <Button
        className="buttonPenguin"
        onClick={sendRequest}
        onMouseEnter={handleHover}
        variant="outline-success"
      >
        Penguin Me!
      </Button>{" "}
      <AppearingText dataPassed={sentence} />
    </div>
  );
}

export default ButtonPenguin;
