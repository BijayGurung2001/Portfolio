
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter basename='Portfolio'>
     <div className="App">
      <Home/>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
