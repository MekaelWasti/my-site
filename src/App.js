// Routing
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// import components
import Home from "./components/Home";
import HandwrittenDigitRecognizer from "./components/HDR";
import Research from "./components/Research";
import GPT from "./components/GPT";
import CvDl1 from "./components/CvDl1";
import NlpDl1 from "./components/NlpDl1";

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
            <Link to="/gpt" className="links">
              GPT <p className="divider">||</p>
            </Link>
          </li>
          <li>
            <Link to="/cv-dl-1" className="links">
              CV DL #1 <p className="divider">||</p>
            </Link>
          </li>
          <li>
            <Link to="/nlp-dl-1" className="links">
              NLP DL #1 <p className="divider">||</p>
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
          <Route path="/gpt" element={<GPT />}></Route>
          <Route path="/cv-dl-1" element={<CvDl1 />}></Route>
          <Route path="/nlp-dl-1" element={<NlpDl1 />}></Route>
          <Route path="/hdr" element={<HandwrittenDigitRecognizer />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
