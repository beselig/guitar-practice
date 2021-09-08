import { useEffect, useState } from "react";
import "./App.css";
import { pickRandomFret, pickRandomNote, pickRandomString } from "./utils";

const useKeyEventHandler = (callback: () => void) => {
  useEffect(() => {
    const cb = (e: KeyboardEvent): void => {
      if (e.key !== "Tab") {
        callback();
      }
    };
    window.addEventListener("keydown", cb);

    return () => {
      window.removeEventListener("keydown", cb);
    };
  }, [callback]);
};

const FindFretPractice = () => {
  const [randomString, setRandomString] = useState(pickRandomString());
  const [randomNote, setRandomNote] = useState(pickRandomNote());

  useKeyEventHandler(() => {
    setRandomString(pickRandomString());
    setRandomNote(pickRandomNote());
  });

  return (
    <div className="mode">
      <h2>Find</h2>
      <h1>
        <b>{randomNote}</b> on <b>{randomString}</b>
      </h1>
      <p>Press 'space' or 'enter'</p>
    </div>
  );
};

const NameNotesPractice = () => {
  const [randomString, setRandomString] = useState(pickRandomString());
  const [randomFret, setRandomFret] = useState(pickRandomFret());

  useKeyEventHandler(() => {
    setRandomString(pickRandomString());
    setRandomFret(pickRandomFret());
  });

  return (
    <div className="mode">
      <h2>Name</h2>
      <h1>
        <b>{randomFret}</b> on <b>{randomString}</b>
      </h1>
      <p>Press 'space' or 'enter'</p>
    </div>
  );
};

const MODES = { FIND_FRETS: "find_frets", NAME_NOTES: "name_notes" };

const App = () => {
  const [mode, setMode] = useState(MODES.FIND_FRETS);

  const toggleMode = () => {
    if (mode === MODES.FIND_FRETS) {
      setMode(MODES.NAME_NOTES);
    } else {
      setMode(MODES.FIND_FRETS);
    }
  };

  useEffect(() => {
    const cb = (e: KeyboardEvent): void => {
      e.preventDefault();
      if (e.key === "Tab") {
        toggleMode();
      }
    };

    window.addEventListener("keydown", cb);
    return () => {
      window.removeEventListener("keydown", cb);
    };
  });

  return (
    <div className="App">
      {mode === MODES.FIND_FRETS ? <FindFretPractice /> : <NameNotesPractice />}
      <div className="switch-modes-section">
        <h2>Press 'Tab' to switch modes</h2>
        {/* <button className="switch-modes-button" onClick={toggleMode}>
          Practice finding frets
        </button> */}
      </div>
    </div>
  );
};

export default App;
