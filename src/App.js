
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <HashRouter >
      <router basename={process.env.PUBLIC_URL}>
          <Routes>
          <Route path="/" element={<Home />} />
                  </Routes>
          </router>
     
    </HashRouter>
   
  );
}

export default App;
