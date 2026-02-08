import { useTuner } from "@/hooks/useTuner";
import { frequencyToNote } from "@/utils/pitchUtils";
import { useEffect, useState } from "react";

export const Tuner = () => {
  const [E2, setE2] = useState<boolean>(false);
  const [A2, setA2] = useState<boolean>(false);
  const [D3, setD3] = useState<boolean>(false);
  const [G3, setG3] = useState<boolean>(false);
  const [B3, setB3] = useState<boolean>(false);
  const [E4, setE4] = useState<boolean>(false);
  const [currNote, setCurrNote] = useState<String>("");
  const [tuningMessage, setTuningMessage] = useState("");

  const { frequency } = useTuner();

  // const { note, octave } = frequencyToNote(frequency);
  const noteData = frequency ? frequencyToNote(frequency) : null;
  const note = noteData?.note ?? "";
  const octave = noteData?.octave ?? "";

  const handleE2 = () => {
    setE2(true);
    setCurrNote("E2");
    setA2(false);
    setD3(false);
    setG3(false);
    setB3(false);
    setE4(false);
  };

  const handleA2 = () => {
    setA2(true);
    setCurrNote("A2");
    setE2(false);
    setD3(false);
    setG3(false);
    setB3(false);
    setE4(false);
  };

  const handleD3 = () => {
    setD3(true);
    setCurrNote("D3");
    setE2(false);
    setA2(false);
    setG3(false);
    setB3(false);
    setE4(false);
  };

  const handleG3 = () => {
    setG3(true);
    setCurrNote("G3");
    setE2(false);
    setA2(false);
    setD3(false);
    setB3(false);
    setE4(false);
  };

  const handleB3 = () => {
    setB3(true);
    setCurrNote("B3");
    setE2(false);
    setA2(false);
    setD3(false);
    setG3(false);
    setE4(false);
  };

  const handleE4 = () => {
    setE4(true);
    setCurrNote("E4");
    setE2(false);
    setA2(false);
    setD3(false);
    setG3(false);
    setB3(false);
  };

  const checkFrequency = (note) => {
    if (!frequency) return "Listening…";
    if (!note) return "Select a String";

    const freq = Number(frequency.toFixed(2));

    if (note === "E4") {
      if (freq > 328.00 && freq < 331.00) {
        return "Tuned";
      } else if (freq > 331.00) {
        return "Tune Down";
      } else {
        return "Tune Up";
      }
    } else if (note === "B3") {
       if (freq > 245.50 && freq < 248.50) {
        return "Tuned";
      } else if (freq > 248.50) {
        return "Tune Down";
      } else {
        return "Tune Up";
      }
    } else if (note === "G3") {
       if (freq > 194.50 && freq < 197.50) {
        return "Tuned";
      } else if (freq > 197.50) {
        return "Tune Down";
      } else {
        return "Tune Up";
      }
    } else if (note === "D3") {
       if (freq > 145.50 && freq < 148.50) {
        return "Tuned";
      } else if (freq > 148.50) {
        return "Tune Down";
      } else {
        return "Tune Up";
      }
    } else if (note === "A2") {
       if (freq > 108.50 && freq < 111.50) {
        return "Tuned";
      } else if (freq > 111.50) {
        return "Tune Down";
      } else {
        return "Tune Up";
      }
    }else if (note === "E2") {
       if (freq > 81.00 && freq < 84.00) {
        return "Tuned";
      } else if (freq > 84.00) {
        return "Tune Down";
      } else {
        return "Tune Up";
      }
    }

    return "Something went wrong";
  };

  useEffect(() => {
    const message = checkFrequency(currNote); // pass selected note
    setTuningMessage(message);
  }, [frequency]);

  return (
    <div className="flex flex-col gap-y-5 sm:gap-y-4 mt-5  ">
      <h2 className="text-3xl text-center font-semibold mb-3">
        My<span className="text-blue-500">Tuner</span>
      </h2>
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          {note}
          {octave}
        </h1>
        <p className="text-gray-400">
          {frequency ? `${frequency.toFixed(2)} Hz` : "Listening…"}
        </p>
        <p
          className={`font-semibold text-xl ${tuningMessage == "Tuned" ? "text-green-500" : "text-red-500"}`}
        >
          {tuningMessage}
        </p>
      </div>
      <div className="flex p-2 relative justify-center overflow-hidden">
        <div className="flex flex-col absolute left-18 sm:left-93 top-29 gap-y-3  ">
          <button
            onClick={() => handleD3()}
            className={` bg-gray-300 rounded-full px-2 py-1  hover:cursor-pointer border-2 ${D3 && "border-black"}`}
          >
            D3
          </button>
          <button
            onClick={() => handleA2()}
            className={` bg-gray-300 rounded-full px-2 py-1  hover:cursor-pointer border-2 ${A2 && "border-black"}`}
          >
            A2
          </button>
          <button
            onClick={() => handleE2()}
            className={` bg-gray-300 rounded-full px-2 py-1  hover:cursor-pointer border-2 ${E2 && "border-black"}`}
          >
            E2
          </button>
        </div>
        <img className="h-105" src="/guitar.png" alt="" />
        <div className="flex flex-col absolute right-18 sm:right-93  top-29 gap-y-3">
          <button
            onClick={() => handleG3()}
            className={` bg-gray-300 rounded-full px-2 py-1  hover:cursor-pointer border-2 ${G3 && "border-black"}`}
          >
            G3
          </button>
          <button
            onClick={() => handleB3()}
            className={` bg-gray-300 rounded-full px-2 py-1  hover:cursor-pointer border-2 ${B3 && "border-black"}`}
          >
            B3
          </button>
          <button
            onClick={() => handleE4()}
            className={` bg-gray-300 rounded-full px-2 py-1  hover:cursor-pointer border-2 ${E4 && "border-black"}`}
          >
            E4
          </button>
        </div>
      </div>
    </div>
  );
};
