import "./App.css";
import Penguin from "./Penguin";

function App() {
  return (
    <body className="web-body">
      <div className="full-app">
        <header className="penguin-title">PENGUIN ME!</header>
        <Penguin className="penguin-image" />
        <p className="web-description">
          Type in your name here for a friendly penguin compliment:
        </p>
        <p className="penguin-button">Button here</p>
        <p className="complimentary-text">Text will appear here</p>
      </div>
    </body>
  );
}

export default App;
