import { useState } from "react";
import { useKeyEventHandler } from "../hooks/useKeyEventHandler";
import { pickRandomNote, pickRandomString } from "../utils";

export const FindFretPractice = () => {
  const [randomString, setRandomString] = useState(pickRandomString());
  const [randomNote, setRandomNote] = useState(pickRandomNote());

  useKeyEventHandler(["Space", "Enter"], () => {
    setRandomString(pickRandomString());
    setRandomNote(pickRandomNote());
  });

  return (
    <div className="mode">
      <h2>Find note</h2>
      <h1>
        <b>{randomNote}</b> on <b>{randomString}</b>
      </h1>
      <p>Press 'space' or 'enter'</p>
    </div>
  );
};
