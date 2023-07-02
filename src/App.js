import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Base from './pages/Base';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Base/>}></Route>
    </Routes>
      </BrowserRouter>
  );
}

export default App;
