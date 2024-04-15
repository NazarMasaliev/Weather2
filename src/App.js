import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import PageWeather from './Page/MainPage';
import 'moment/locale/ru';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageWeather/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
