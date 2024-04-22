import { Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import LinkBook from './pages/link-book';
import "./input.css";
function App() {
  return (
    <Routes>
        <Route
          path='/'
          element={< Home/>}
        />
        <Route
          path='/link-book'
          element={<LinkBook />}
        />
        
      </Routes>
  );
}

export default App;
