export const strings = ["E(6)", "A", "D", "G", "B", "e(1)"];
export const notes = [
  "A",
  ["A#", "Bb"],
  "B",
  "C",
  ["C#", "Db"],
  "D",
  ["D#", "Eb"],
  "E",
  "F",
  ["F#", "Gb"],
  "G",
  ["G#", "Ab"],
];

export const MAX_FRET_COUNT = 22;

export const pickRandomNote = () => {
  const item = notes[Math.floor(Math.random() * notes.length)];
  if (Array.isArray(item)) {
    return item[Math.floor(Math.random() * item.length)];
  }
  return item;
};

export const pickRandomString = () =>
  strings[Math.floor(Math.random() * strings.length)];

export const pickRandomFret = () => Math.floor(Math.random() * MAX_FRET_COUNT);
