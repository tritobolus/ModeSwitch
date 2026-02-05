// utils/pitchUtils.js

export function frequencyToNote(freq) {
  const A4 = 440;
  const noteNumber = 12 * Math.log2(freq / A4) + 69;
  const rounded = Math.round(noteNumber);

  const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  return {
    note: notes[rounded % 12],
    octave: Math.floor(rounded / 12) - 1,
    midi: rounded,
  };
}

export function centsOff(freq, targetFreq) {
  return Math.floor(1200 * Math.log2(freq / targetFreq));
}
