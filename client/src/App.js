import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Auth from './components/Auth/Auth'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Auth />} />
          // <Route path='/' element={<>heyo</>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
