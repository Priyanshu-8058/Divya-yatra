import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ExploreTemple from "./Pages/ExploreTemple";
import YatraPlanner from "./Pages/YatraPlanner";
import YatraPackage from "./Pages/YatraPackage";
import TravelInfo from "./Pages/TravelInfo";
import About from "./Pages/About";
function App(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/temples" element={<ExploreTemple />} />
      <Route path="/planner" element={<YatraPlanner />} />
      <Route path="/packages" element={<YatraPackage />} />
      <Route path="/travel" element={<TravelInfo />} />
      <Route path="/about" element={<About />} />

    </Routes>
  )
}

export default App;