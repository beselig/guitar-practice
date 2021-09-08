import { useState } from "react";
import { useKeyEventHandler } from "../hooks/useKeyEventHandler";
import { pickRandomFret, pickRandomString } from "../utils";

export const NameNotesPractice = () => {
  const [randomString, setRandomString] = useState(pickRandomString());
  const [randomFret, setRandomFret] = useState(pickRandomFret());

  useKeyEventHandler(["Space", "Enter"], () => {
    setRandomString(pickRandomString());
    setRandomFret(pickRandomFret());
  });

  return (
    <div className="mode">
      <h2>Name fret</h2>
      <h1>
        <b>{randomFret}</b> on <b>{randomString}</b>
      </h1>
      <p>Press 'space' or 'enter'</p>
    </div>
  );
};
