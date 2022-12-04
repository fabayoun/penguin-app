import { propTypes } from "react-bootstrap/esm/Image";
import "./AppearingText.css";
import { useEffect } from "react";

function AppearingText(props) {
  return (
    <div>
      <p className="appearing-text">"{props.dataPassed}"</p>
    </div>
  );
}

export default AppearingText;
