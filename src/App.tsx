import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RuntimeMessage } from "./content";

const App:React.FC = () => {

  const [importAvailable, setImportAvailable] = React.useState(false);

  chrome.runtime.onMessage.addListener((message:RuntimeMessage) => {
    if (message.youtubeVideo) {
      setImportAvailable(true);
    }
  })
  function handleImport() {
    chrome.runtime.sendMessage({type: 'ADD'})
  }

  return (
    <div className="App">
      <button onClick={() => handleImport()}>
        Add video
      </button>
    </div>
  );
};

export default App;
