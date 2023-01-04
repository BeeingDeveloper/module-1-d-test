import ThemeProvider  from './context/ThemeProvider';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signin from './pages/Signin';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
