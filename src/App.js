
import './App.css';

import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Exchanges from './components/Exchanges/Exchanges';
import Coins from './components/Coins/Coins';
import CoinDetails from './components/CoinDetails/CoinDetails';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Exchanges/>}  /> 
      <Route path='/coins' element={<Coins/>}/>
    <Route path='/coins/:id' element={<CoinDetails/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;