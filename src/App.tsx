import { useEffect, useState } from "react";
import "./App.css";
import { useKeyEventHandler } from "./hooks/useKeyEventHandler";
import { FindFretPractice } from "./practices/FindFretPractice";
import { NameNotesPractice } from "./practices/NameNotesPractice";

const MODES = { FIND_FRETS: "find_frets", NAME_NOTES: "name_notes" };

const App = () => {
  const [mode, setMode] = useState(MODES.FIND_FRETS);

  useKeyEventHandler(["Tab"], () => {
    if (mode === MODES.FIND_FRETS) {
      setMode(MODES.NAME_NOTES);
    } else {
      setMode(MODES.FIND_FRETS);
    }
  });

  return (
    <div className="App">
      {mode === MODES.FIND_FRETS ? <FindFretPractice /> : <NameNotesPractice />}
      <div className="switch-modes-section">
        <h2>Press 'Tab' to switch modes</h2>
      </div>
    </div>
  );
};

export default App;
