
import { HashRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <HashRouter >
      <router >
          <Routes>
          <Route path="/" element={<Home />} />
                  </Routes>
          </router>
     
    </HashRouter>
   
  );
}

export default App;
