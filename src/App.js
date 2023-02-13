import Navbar from "../src/Components/Navbar/Navbar";
import Hero from "../src/Components/Hero/Hero.jsx";
import Projects from "../src/Components/Projects/Projects.jsx";
import Videos  from "../src/Components/ProjectVideos/Videos.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path = "/projects" element = {<Projects />} />
        <Route path = "/videos" element = {<Videos />} />
   
    
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
