import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlayStation from './Components/PlayStation/PlayStation';
import Twitter from './Components/Twitter/Twiiter';
import Bookmyshow from './Components/Bookmyshow/Bookmyshow';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'
            element={<Home />}>

          </Route>
          <Route path='/playstation' element={<PlayStation />} />
          <Route path='/twitter' element={<Twitter />} />
          <Route path='/bookmyshow' element={<Bookmyshow />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
