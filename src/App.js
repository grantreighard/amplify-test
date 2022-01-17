import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Anywhere from './components/Anywhere';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:route" element={<Anywhere />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
