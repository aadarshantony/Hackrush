import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CodeOfConduct from './pages/CodeOfConduct';
import ScrollToAnchor from './components/ScrollToAnchor';
import Rules from './pages/Rules';

const App = () => {
  return (
    <Router>
      <SmoothScroll>
        <ScrollToAnchor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/rules" element={<Rules />} />  
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SmoothScroll>
    </Router>
  );
};

export default App;