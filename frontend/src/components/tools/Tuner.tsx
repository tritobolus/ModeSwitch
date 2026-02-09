import { useTuner } from "@/hooks/useTuner";
import { frequencyToNote } from "@/utils/pitchUtils";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {TUNINGS} from "../../assets/scale.ts"
import { Switch } from "@/components/ui/switch";

export const Tuner = () => {
  const [E2, setE2] = useState<boolean>(false);
  const [A2, setA2] = useState<boolean>(false);
  const [D3, setD3] = useState<boolean>(false);
  const [G3, setG3] = useState<boolean>(false);
  const [B3, setB3] = useState<boolean>(false);
  const [E4, setE4] = useState<boolean>(false);
  const [auto, setAuto] = useState<boolean>(true);
  const [tuning, setTuning] = useState<String>("standard");
  const [instrument, setInstrument] = useState<String>("standard");

  const [currNote, setCurrNote] = useState<String>("");
  const [tuningMessage, setTuningMessage] = useState("");

  const { frequency } = useTuner();

  // const { note, octave } = frequencyToNote(frequency);
  const noteData = frequency ? frequencyToNote(frequency) : null;
  const note = noteData?.note ?? "";
  const octave = noteData?.octave ?? "";

const autoStringSelect = (freq) => {
  if (tuning === "standard") {
    if (freq <= 96.2) {
      handleE2();
    } else if (freq <= 128.41) {
      handleA2();
    } else if (freq <= 171.41) {
      handleD3();
    } else if (freq <= 221.47) {
      handleG3();
    } else if (freq <= 287.815) {
      handleB3();
    } else {
      handleE4();
    }
  } else if (tuning === "D#") {
    if (freq <= 90.8) {
      handleE2(); // D#2
    } else if (freq <= 121.21) {
      handleA2(); // G#2
    } else if (freq <= 161.8) {
      handleD3(); // C#3
    } else if (freq <= 209.04) {
      handleG3(); // F#3
    } else if (freq <= 272.11) {
      handleB3(); // A#3
    } else {
      handleE4(); // D#4
    }
  }
};


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

  const TOLERANCE = 1.5
  const checkFrequency = (note: String) => {
    if (!frequency) return "Listening…";
    if (!note) return "Select a String";

    const freq = Number(frequency.toFixed(2));

    const tuningNotes = TUNINGS[tuning];

    const target = tuningNotes[note];

    if (freq >= target - TOLERANCE && freq <= target + TOLERANCE) {
    return "Tuned";
  } else if (freq > target + TOLERANCE) {
    return "Tune Down";
  } else {
    return "Tune Up";
  }

  };


  useEffect(() => {
    if(!auto) return
    autoStringSelect(frequency)
  },[frequency])

  useEffect(() => {
    const message = checkFrequency(currNote); // pass selected note
    setTuningMessage(message);
  }, [frequency, currNote]);

  const handleSwitch = () => {
    if(auto) {
      setAuto(false)
    }else {
      setAuto(true)
    }
  }

  return (
    <div className="flex flex-col gap-y-5 justify-between sm:gap-y-4 mt-5  ">
       <h2 className="text-3xl text-center font-semibold mb-3">
        My<span className="text-blue-500">Tuner</span>
      </h2>
      <div className="flex justify-between px-5 sm:px-50">
        {/* select the type of tuning */}
        <div className="flex flex-col ">
          <label htmlFor="">Tuning</label>
          <Select onValueChange={setTuning}>
            <SelectTrigger className="w-26 sm:w-30">
              <SelectValue placeholder="Standard" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>select tuning</SelectLabel>

                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="D#">D#</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* note and frequency of sound */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            {note}
            {octave}
          </h1>
          <p className="text-gray-400">
            {frequency ? `${frequency.toFixed(2)} Hz` : "Listening…"}
          </p>
          
        </div>
        
        <div>

          {/* select instrument */}
           <label htmlFor="">Instrument</label>
          <Select onValueChange={setInstrument}>
            <SelectTrigger className="w-26 sm:w-30">
              <SelectValue placeholder="Guitar" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>select instrument</SelectLabel>

                <SelectItem value="guitar">Guitar</SelectItem>
                <SelectItem value="ukulele">Ukulele</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <p
            className={`font-semibold text-xl text-center ${tuningMessage == "Tuned" ? "text-green-500" : "text-red-500"}`}
          >
            {tuningMessage}
          </p>

      <div className="flex p-2 relative justify-center overflow-hidden mt-5 sm:mt-0">
        <div className="flex gap-x-2 absolute right-10 top-0">
              <p>Manually</p>
              <Switch className="hover:cursor-pointer" checked={!auto}  onClick={handleSwitch} />
            </div>
        <div className="flex flex-col absolute left-10 sm:left-85 top-17 gap-y-4  ">
          <button
            onClick={() => {handleD3(),setAuto(false)}}
            className={` bg-gray-300 rounded-full h-11 w-11  hover:cursor-pointer border-2 ${D3 && "border-black"}`}
          >
            {tuning == "standard" ? "D3" : "C#3"}
          </button>
          <button
            onClick={() => {handleA2(),setAuto(false)}}
            className={` bg-gray-300 rounded-full h-11 w-11  hover:cursor-pointer border-2 ${A2 && "border-black"}`}
          >
            {tuning == "standard" ? "A2" : "G#2"}
          </button>
          <button
            onClick={() => {handleE2(),setAuto(false)}}
            className={` bg-gray-300 rounded-full h-11 w-11  hover:cursor-pointer border-2 ${E2 && "border-black"}`}
          >
            {tuning == "standard" ? "E2" : "D#2"}
          </button>
        </div>
        <img className="h-102 " src="/guitar1.png" alt="" />
        <div className="flex flex-col absolute right-10 sm:right-85 top-17 gap-y-4">
          <button
            onClick={() => {handleG3(),setAuto(false)}}
            className={` bg-gray-300 rounded-full h-11 w-11  hover:cursor-pointer border-2 ${G3 && "border-black"}`}
          >
            {tuning == "standard" ? "G3" : "F#3"}
          </button>
          <button
            onClick={() => {handleB3(),setAuto(false)}}
            className={` bg-gray-300 rounded-full h-11 w-11  hover:cursor-pointer border-2 ${B3 && "border-black"}`}
          >
            {tuning == "standard" ? "B3" : "A#3"}
          </button>
          <button
            onClick={() => {handleE4(),setAuto(false)}}
            className={` bg-gray-300 rounded-full h-11 w-11  hover:cursor-pointer border-2 ${E4 && "border-black"}`}
          >
            {tuning == "standard" ? "E4" : "D#4"}
          </button>
        </div>
      </div>
    </div>
  );
};
