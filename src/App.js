
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter basename='Portfolio'>
     <div className="App">
     <Routes>
          <Route path="/Portfolio" element={<Home />} />
          
        </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
