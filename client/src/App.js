import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Home from './components/Home/Home'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
