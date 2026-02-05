import { chords, musicalAlphabet, scales } from "@/assets/scale";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  FaArrowDownLong,
  FaCirclePlus,
  FaCircleMinus,
  FaArrowRightLong,
} from "react-icons/fa6";
import { useEffect, useState } from "react";

import { Switch } from "@/components/ui/switch";


export const CapoChordConverter = () => {
  const [note, setNote] = useState<string>("");
  const [scale, setScale] = useState<string>("");
  const [fret, setFret] = useState<number>(0);
  const [selectedChords, setSelectedChords] = useState<string[]>([""]);
  const [convertedChords, setConvertedChords] = useState<string[]>([]);

  const chordOptions = note && scale ? chords[note][scale] : [];

  const convertCapo = () => {
    if (!note || !scale || fret === 0) return;
    const oldindex = Object.keys(chords).indexOf(note);
    const newIndex = (oldindex - fret + 12) % 12;
    const currentNote = Object.keys(chords)[newIndex];

    const convertedChords = [];

    for (let i = 0; i < selectedChords.length; i++) {
      const currIndex = chords[note][scale].indexOf(selectedChords[i]);
      convertedChords.push(chords[currentNote][scale][currIndex]);
    }
    setConvertedChords(convertedChords);
  };

  useEffect(() => {
    convertCapo();
  }, [fret, selectedChords, fret]);

  // this is for showing all the possibilities
  const [showPossibilities, setShowPossibilities] = useState<boolean>(false);
  const [possibilities, setPossibilities] = useState([]);

  const handleSwitch = () => {
    if (showPossibilities) {
      setShowPossibilities(false);
    } else {
      setShowPossibilities(true);
    }
  };

  const allPossibilityConverter = () => {
    if (!note || !scale) return;

    const possibilities = [];

    const oldindex = Object.keys(chords).indexOf(note);

    for (let i = 1; i <= 12; i++) {
      const convertedChords = [];
      const newIndex = (oldindex - i + 12) % 12;
      const currentNote = Object.keys(chords)[newIndex];
      for (let j = 0; j < selectedChords.length; j++) {
        const currIndex = chords[note][scale].indexOf(selectedChords[j]);
        convertedChords.push(chords[currentNote][scale][currIndex]);
      }
      possibilities.push(convertedChords);
    }
    setPossibilities(possibilities);
  };

  useEffect(() => {
    if (!showPossibilities) return;
    allPossibilityConverter();
  }, [showPossibilities, selectedChords, scale]);

  return (
    <>
      <div className="flex flex-col gap-y-5 sm:gap-y-4 mt-5 ">
        <h2 className="text-3xl text-center font-semibold mb-3">
          CapoChord <span className="text-blue-500">Converter</span>
        </h2>
        {/* mucial alphabet */}
        <div className="flex gap-x-4 justify-center">
          {musicalAlphabet.map((alphabet, index) => (
            <p key={index}>{alphabet}</p>
          ))}
        </div>

        {/* ================== CONTROLS ================== */}
        <div className="flex justify-between">
          <div className="flex gap-x-3">
            <div>
              <label>Root</label>
              <Select onValueChange={setNote}>
                <SelectTrigger className="w-20 sm:w-25">
                  <SelectValue placeholder="root" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select root</SelectLabel>
                    {Object.keys(scales).map((key) => (
                      <SelectItem key={key} value={key}>
                        {key}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label>Scale</label>
              <Select onValueChange={setScale}>
                <SelectTrigger className="w-22">
                  <SelectValue placeholder="scale" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select scale</SelectLabel>
                    <SelectItem value="major">Major</SelectItem>
                    <SelectItem value="minor">Minor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col">
            <p>Select fret</p>
            <Select onValueChange={(val) => setFret(Number(val))}>
              <SelectTrigger className="w-25">
                <SelectValue placeholder="Fret" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {[...Array(12)].map((_, i) => (
                    <SelectItem key={i + 1} value={`${i + 1}`}>
                      {i + 1}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* ================== CHORD SELECT ================== */}
        <div>
          <div className="flex justify-between">
            <p>Chords</p>
            <div className="flex gap-x-2">
              <p>See all Possibilities</p>
              <Switch disabled={!note || !scale || !fret} onClick={handleSwitch} />
            </div>
          </div>

          <div className="flex justify-between items-center gap-x-2">
            <FaCircleMinus
              className={`${
                selectedChords.length <= 1
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer"
              }`}
              onClick={() =>
                selectedChords.length > 1 &&
                setSelectedChords((prev) => prev.slice(0, -1))
              }
            />

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
              {selectedChords.map((value, index) => (
                <Select
                  key={index}
                  value={value}
                  disabled={!note || !scale || !fret}
                  onValueChange={(val) =>
                    setSelectedChords((prev) => {
                      const updated = [...prev];
                      updated[index] = val;
                      return updated;
                    })
                  }
                >
                  <SelectTrigger className="w-20 sm:w-25">
                    <SelectValue placeholder={`Chord ${index + 1}`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {chordOptions.map((chord) => (
                        <SelectItem key={chord} value={chord}>
                          {chord}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              ))}
            </div>

            <FaCirclePlus
              className={`${
                selectedChords.length >= 7
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer"
              }`}
              onClick={() =>
                selectedChords.length < 7 &&
                setSelectedChords((prev) => [...prev, ""])
              }
            />
          </div>
        </div>

        {/* ================== TABLE ================== */}
        {convertedChords.length > 0 && (
          <div className="sm:mt-6 mt-4 flex justify-center">
            <div
              className={`w-90 sm:w-190 border border-gray-700 overflow-y-auto 
          ${showPossibilities ? `sm:h-[40vh]  ${selectedChords.length <=3 ? "h-[35vh]" : selectedChords.length >3 && selectedChords.length<=6 ? "h-[30vh]" : "h-[25vh]"} ` : ""}
        `}
            >
              <table className="w-full border-collapse">
                <thead className="bg-gray-800 rounded-lg text-white sticky top-0 z-20">
                  <tr>
                    <th className="px-2 py-1 border border-gray-700 sticky left-0 bg-gray-800">
                      Fret No
                    </th>
                    {selectedChords.map((chord, index) => (
                      <th
                        key={index}
                        className="px-4 py-2 border border-gray-700"
                      >
                        {chord || `Chord ${index + 1}`}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="bg-gray-900 text-gray-200">
                  {!showPossibilities && (
                    <tr>
                      <td className="px-4 py-2 border border-gray-700 sticky left-0 bg-gray-900">
                        {fret}
                      </td>
                      {convertedChords.map((chord, i) => (
                        <td
                          key={i}
                          className="px-4 py-2 border border-gray-700 text-green-400"
                        >
                          {chord}
                        </td>
                      ))}
                    </tr>
                  )}

                  {showPossibilities &&
                    possibilities.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <td className="px-4 py-2 border border-gray-700 sticky left-0 bg-gray-900">
                          {rowIndex + 1}
                        </td>
                        {row.map((chord, colIndex) => (
                          <td
                            key={colIndex}
                            className="px-4 py-2 border border-gray-700 text-green-400"
                          >
                            {chord}
                          </td>
                        ))}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
