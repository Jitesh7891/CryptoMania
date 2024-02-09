import { BrowserRouter, Routes, Route } from "react-router-dom"
import Exchanges from './components/Exchanges/Exchanges';
import Coins from './components/Coins/Coins';
import CoinDetails from './components/CoinDetails/CoinDetails';
import News from './components/News/News';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Exchanges />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/coins/:id' element={<CoinDetails />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;