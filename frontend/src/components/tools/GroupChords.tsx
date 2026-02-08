import { useState } from "react";
import { musicalAlphabet, scales, chords, MajorChordDegrees, MinorChordDegrees } from "@/assets/scale";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const GroupChords = () => {
  const [note, setNote] = useState<string>("");
  const [scale, setScale] = useState<string>("");
  return (
    <>
      <div className="flex flex-col gap-y-5 sm:gap-y-4 mt-5 px-5 sm:px-10 py-5 ">
        <h2 className="text-3xl text-center font-semibold mb-3">
          Group <span className="text-blue-500">Chords</span>
        </h2>
        {/* mucial alphabet */}
        <div className="flex gap-x-4 justify-center">
          {musicalAlphabet.map((alphabet, index) => (
            <p key={index}>{alphabet}</p>
          ))}
        </div>

        <div className="flex gap-x-3 justify-center">
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

          <p className="text-center">Your Group Chords are :</p>

       <div className="flex justify-center ">
          {note && scale && (
             <div className="flex gap-x-4">
            {chords[note][scale]?.map((chord, index) => (
                <div className="flex flex-col">
                    <p className="text-lg text-gray-400">{scale == "major" ? MajorChordDegrees[index] : MinorChordDegrees[index]}</p>
                    <p key={index} className={`${index == 0 ? 'text-red-500' : ""} font-semibold text-xl`}>{chord}</p>
                </div>
            ))}
          </div>
         )}
       </div>

      </div>
    </>
  );
};
