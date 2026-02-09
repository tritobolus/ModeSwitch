export const scales = {
  'C': ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
  'C#': ['C#', 'D#', 'F', 'F#', 'G#', 'A#', 'C'],
  'D': ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
  'D#': ['D#', 'F', 'G', 'G#', 'A#', 'C', 'D'],
  'E': ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
  'F': ['F', 'G', 'A', 'A#', 'C', 'D', 'E'],
  'F#': ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'F'],
  'G': ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
  'G#': ['G#', 'A#', 'C', 'C#', 'D#', 'F', 'G'],
  'A': ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
  'A#': ['A#', 'C', 'D', 'D#', 'F', 'G', 'A'],
  'B': ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#']
};

export const chords = {
  'C': {
    major: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'],
    minor: ['Cm', 'Ddim', 'D#', 'Fm', 'Gm', 'G#', 'A#']
  },
  'C#': {
    major: ['C#', 'D#m', 'Fm', 'F#', 'G#', 'A#m', 'Cdim'],
    minor: ['C#m', 'D#dim', 'E', 'F#m', 'G#m', 'A', 'B']
  },
  'D': {
    major: ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'],
    minor: ['Dm', 'Edim', 'F', 'Gm', 'Am', 'A#', 'C']
  },
  'D#': {
    major: ['D#', 'Fm', 'Gm', 'G#', 'A#', 'Cm', 'Ddim'],
    minor: ['D#m', 'Fdim', 'F#', 'G#m', 'A#m', 'B', 'C#']
  },
  'E': {
    major: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'],
    minor: ['Em', 'F#dim', 'G', 'Am', 'Bm', 'C', 'D']
  },
  'F': {
    major: ['F', 'Gm', 'Am', 'A#', 'C', 'Dm', 'Edim'],
    minor: ['Fm', 'Gdim', 'G#', 'A#m', 'Cm', 'C#', 'D#']
  },
  'F#': {
    major: ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'Fdim'],
    minor: ['F#m', 'G#dim', 'A', 'Bm', 'C#m', 'D', 'E']
  },
  'G': {
    major: ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim'],
    minor: ['Gm', 'Adim', 'A#', 'Cm', 'Dm', 'D#', 'F']
  },
  'G#': {
    major: ['G#', 'A#m', 'Cm', 'C#', 'D#', 'Fm', 'Gdim'],
    minor: ['G#m', 'A#dim', 'B', 'C#m', 'D#m', 'E', 'F#']
  },
  'A': {
    major: ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim'],
    minor: ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G']
  },
  'A#': {
    major: ['A#', 'Cm', 'Dm', 'D#', 'F', 'Gm', 'Adim'],
    minor: ['A#m', 'Cdim', 'C#', 'D#m', 'Fm', 'F#', 'G#']
  },
  'B': {
    major: ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#dim'],
    minor: ['Bm', 'C#dim', 'D', 'Em', 'F#m', 'G', 'A']
  }
};

export const musicalAlphabet = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

export const MajorChordDegrees = [
  "I",
  "ii",
  "iii",
  "IV",
  "V",
  "vi",
  "vii°",
];

export const MinorChordDegrees = [
  "i",
  "ii°",
  "III",
  "iv",
  "v",
  "VI",
  "VII",
];

export const MAJOR_SCALE_FORMULA = ["W", "W", "H", "W", "W", "W", "H"];
export const MINOR_SCALE_FORMULA = ["W", "H", "W", "W", "H", "W", "W"];

export const GUITAR_TUNINGS = {
  standard: {
    E4: 329.63,
    B3: 246.94,
    G3: 196.0,
    D3: 146.83,
    A2: 110.0,
    E2: 82.41,
  },
  "D#": {
    E4: 311.13, // actually D#4
    B3: 233.08, // A#3
    G3: 185.0,  // F#3
    D3: 138.59, // C#3
    A2: 103.83, // G#2
    E2: 77.78,  // D#2
  },
};

export const UKULELE_TUNINGS = {
  standard: {
    G4: 392.0,
    C4: 261.63,
    E4: 329.63,
    A4: 440.0,
  },
  low_g: {
    G4: 196.0, //actually its G3
    C4: 261.63,
    E4: 329.63,
    A4: 440.0,
  },
  "G#": {
    G4: 369.99,  // F#4
    C4: 246.94,   //B3
    E4: 311.13,  // D#4
    A4: 415.30,  // G#4
  }
};





