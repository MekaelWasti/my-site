// Routing
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// import components
import Home from "./components/Home";
import HandwrittenDigitRecognizer from "./components/HDR";
import Research from "./components/Research";
import QUANTUM from "./components/QUANTUM";
import NMT from "./components/NMT";
import GPT from "./components/GPT";
import AUTOCOMPLETE from "./components/AUTOCOMPLETE";
import VOICE_BIOMETRICS from "./components/Voice_Biometrics";

// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="title">
          <Link to="/" className="title-link">
            MEKAEL WASTI
          </Link>
        </h1>
        <ul className="project-list">
          <li>
            <Link to="/" className="links">
              HOME <p className="divider">||</p>
            </Link>
          </li>
          <li>
            <Link to="/research" className="links">
              RESEARCH <p className="divider">||</p>
            </Link>
          </li>
          <li>
            <Link to="/quantum" className="links">
              QUANTUM <p className="divider">||</p>
            </Link>
          </li>
          <li>
            <Link to="/nmt" className="links">
              NMT <p className="divider">||</p>
            </Link>
          </li>
          <li>
            <Link to="/gpt" className="links">
              GPT <p className="divider">||</p>
            </Link>
          </li>
          <li>
            <Link to="/autocomplete" className="links">
              AUTOCOMPLETE <p className="divider">||</p>
            </Link>
          </li>
          <li>
            <Link to="/voice_biometrics" className="links">
              VOICE BIOMETRICS <p className="divider">||</p>
            </Link>
          </li>
          <li>
            <Link to="/hdr" className="links">
              HANDWRITTEN DIGIT RECOGNIZER <p className="divider">||</p>
            </Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/research" element={<Research />}></Route>
          <Route path="/quantum" element={<QUANTUM />}></Route>
          <Route path="/nmt" element={<NMT />}></Route>
          <Route path="/gpt" element={<GPT />}></Route>
          <Route path="/autocomplete" element={<AUTOCOMPLETE />}></Route>
          <Route
            path="/voice_biometrics"
            element={<VOICE_BIOMETRICS />}
          ></Route>
          <Route path="/hdr" element={<HandwrittenDigitRecognizer />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
