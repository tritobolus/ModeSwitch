import { useEffect, useState } from "react";
import {
  scales,
  chords,
  musicalAlphabet,
  MajorChordDegrees,
  MinorChordDegrees,
} from "../../assets/scale";

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

export const ScaleChanger = () => {
  const [fromNote, setFromNote] = useState<string>("");
  const [toNote, setToNote] = useState<string>("");
  const [scale, setScale] = useState<string>("");
  const [convertedChords, setConvertedChords] = useState<string[]>([]);

  const [selectedChords, setSelectedChords] = useState<string[]>([""]);

  const chordOptions = fromNote && scale ? chords[fromNote][scale] : [];

  // to convert the chords with key
  const Convert = () => {
    const convertedChords = [];
    if (!fromNote || !toNote || !scale) {
      setConvertedChords([]);
      return;
    }
    for (let i = 0; i < selectedChords.length; i++) {
      const currIndex = chords[fromNote][scale].indexOf(selectedChords[i]);
      convertedChords.push(chords[toNote][scale][currIndex]);
    }
    setConvertedChords(convertedChords);
  };

  useEffect(() => {
    Convert();
  }, [selectedChords, toNote]);

  useEffect(() => {
    setConvertedChords([]);
    setSelectedChords([""]);
  }, [fromNote, scale]);

  return (
    <div className="flex flex-col gap-y-5  mt-2 px-5 sm:px-10 py-5 rounded-2xl">
      <h2 className="text-3xl text-center font-semibold mb-3">
        chord <span className="text-blue-500">Conversion</span>
      </h2>
      {/* mucial alphabet */}
      <div className="flex gap-x-4 justify-center">
        {musicalAlphabet.map((alphabet, index) => (
          <p key={index}>{alphabet}</p>
        ))}
      </div>

      {/* from Note + Scale + to Note */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-semibold"> From</h2>
          <div className="flex gap-x-3">
            <div>
              <label>Root</label>
              <Select onValueChange={setFromNote}>
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
                <SelectTrigger className="w-22 ">
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
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-semibold"> To</h2>
          <div className="flex gap-x-3">
            <div>
              <label>Root</label>
              <Select onValueChange={setToNote}>
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
              <p>{scale == "" ? "" : scale == "major" ? "Major" : "Minor"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chords */}
      <div>
        <p>Chords</p>

        <div className=" gap-x-1 sm:gap-x-4 flex justify-between items-center">
          {/* Remove */}
          <Tooltip>
            <TooltipTrigger asChild>
              <FaCircleMinus
                disabled={selectedChords.length <= 1}
                className={
                  selectedChords.length <= 1
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }
                onClick={() =>
                  setSelectedChords((prev) =>
                    prev.length > 1 ? prev.slice(0, -1) : prev,
                  )
                }
              >
                -
              </FaCircleMinus>
            </TooltipTrigger>
            <TooltipContent>
              {selectedChords.length > 1
                ? "Remove chord"
                : "Can't be less than 1"}
            </TooltipContent>
          </Tooltip>

          {/* Chord Selects */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-y-1 gap-x-2">
            {selectedChords.map((value, index) => (
              <Select
                key={index}
                value={value}
                disabled={!fromNote || !scale}
                onValueChange={(val) => {
                  setSelectedChords((prev) => {
                    const updated = [...prev];
                    updated[index] = val;
                    return updated;
                  });
                }}
              >
                <SelectTrigger className="w-20 sm:w-30">
                  <SelectValue placeholder={`Chord ${index + 1}`} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Chord</SelectLabel>
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

          {/* Add */}
          <Tooltip>
            <TooltipTrigger asChild>
              <FaCirclePlus
                disabled={selectedChords.length >= 7}
                className={
                  selectedChords.length >= 7
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }
                onClick={() =>
                  setSelectedChords((prev) =>
                    prev.length < 7 ? [...prev, ""] : prev,
                  )
                }
              >
                +
              </FaCirclePlus>
            </TooltipTrigger>
            <TooltipContent>
              {selectedChords.length < 7
                ? "Add chord"
                : "Can't be greater than 7"}
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* show conversion */}
      <div className="flex flex-col gap-y-5">
        <h2
          className="flex items-center gap-x-2"
          hidden={!scale || !fromNote || !toNote}
        >
          <span className="font-semibold">
            {fromNote} {scale}
          </span>{" "}
          <FaArrowRightLong />{" "}
          <span className="font-semibold">
            {toNote} {scale}
          </span>{" "}
          chord conversion :
        </h2>
        <div className="flex gap-x-3 sm:gap-x-10 justify-center">
          {convertedChords?.map((chord, index) => (
            <div
              className="flex flex-col justify-center items-center gap-y-2"
              key={index}
            >
              <p
                className={` ${!chord ? "hidden" : ""} text-gray-400 font-semibold`}
              >
                {scale == "major"
                  ? MajorChordDegrees[chords[toNote][scale].indexOf(chord)]
                  : MinorChordDegrees[chords[toNote][scale].indexOf(chord)]}
              </p>
              <p
                className={`text-xl sm:text-2xl ${selectedChords[index]?.split("", 1) == fromNote ? "text-red-500" : "text-gray-500"}`}
              >
                {selectedChords[index]}
              </p>
              <FaArrowDownLong className={` ${!chord ? "hidden" : ""}`} />
              <p
                className={`text-xl sm:text-2xl font-semibold ${chord?.split("", 1) == toNote ? "text-red-500" : ""} `}
              >
                {" "}
                {chord}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
