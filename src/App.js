import { Routes, Route } from 'react-router-dom';

import Home from "./Pages/Home";
import About from './Pages/About';
import Skill from './Pages/Skill';
import Project from './Pages/Project';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/skill' element={<Skill />} />
<Route path='/project' element={<Project />} />
<Route path='/contact' element={<Contact />} />
    </Routes>
        </header>
    </div>
  );
}

export default App;
