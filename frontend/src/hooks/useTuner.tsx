// hooks/useTuner.js
import { useEffect, useRef, useState } from "react";
import { PitchDetector } from "pitchy";

export function useTuner() {
  const [frequency, setFrequency] = useState(null);
  const [clarity, setClarity] = useState(0);

  const analyserRef = useRef(null);
  const audioCtxRef = useRef(null);
  const bufferRef = useRef(null);
  const detectorRef = useRef(null);

  useEffect(() => {
    let rafId;

    async function init() {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 2048;

      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);

      const buffer = new Float32Array(analyser.fftSize);
      const detector = PitchDetector.forFloat32Array(analyser.fftSize);

      audioCtxRef.current = audioContext;
      analyserRef.current = analyser;
      bufferRef.current = buffer;
      detectorRef.current = detector;

      const listen = () => {
        analyser.getFloatTimeDomainData(buffer);

        const [freq, clarity] =
          detector.findPitch(buffer, audioContext.sampleRate);

        if (clarity > 0.9 && freq > 0) {
          setFrequency(freq);
          setClarity(clarity);
        }

        rafId = requestAnimationFrame(listen);
      };

      listen();
    }

    init();

    return () => {
      cancelAnimationFrame(rafId);
      audioCtxRef.current?.close();
    };
  }, []);

  return { frequency, clarity };
}
