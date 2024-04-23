import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import View from './Components/View';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/view/:id' element={<View/>}/> 

      </Routes>

    </div>
  );
}

export default App;
