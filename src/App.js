
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter >
      <router >
          <Routes>
          <Route path="/" element={<Home />} />
                  </Routes>
          </router>
     
    </BrowserRouter>
   
  );
}

export default App;
