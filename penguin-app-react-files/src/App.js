import "./App.css";
import Penguin from "./Penguin";
import ButtonPenguin from "./Button";
import AppearingText from "./AppearingText";
import InputName from "./InputName";

function App() {
  return (
    <body className="web-body">
      <div className="full-app">
        <header className="penguin-title">PENGUIN ME!</header>
        <Penguin className="penguin-image" />
        <p className="web-description">
          Type in your name here for a friendly penguin compliment:
        </p>
        <InputName className="input-name" />
      </div>
    </body>
  );
}

export default App;
