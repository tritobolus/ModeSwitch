// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";

import {Tools} from "./pages/Tools";
import { About } from "./pages/About";
import  Blogs  from "./pages/Blogs";
import { ScaleChanger } from "./components/tools/ChorConversion";
import { Tuner } from "./components/tools/Tuner";
import { Metronome } from "./components/tools/Metronome";
import { CapoChordConverter } from "./components/tools/CapoChordConverter";
import { GroupChords } from "./components/tools/GroupChords";
import {Body} from './components/Body'
import BlogPost from "./components/blogs/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Body/>} />
          <Route path="/tools" element={<Tools />}> 
            <Route path="chord-conversion" element={<ScaleChanger/>}/>
            <Route path="capo-chord-converter" element={<CapoChordConverter/>}/>
            <Route path="tuner" element={<Tuner/>}/>
            <Route path="metronome" element={<Metronome/>}/>
            <Route path="group-chords" element={<GroupChords/>}/>
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
