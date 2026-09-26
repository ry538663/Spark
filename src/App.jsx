import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bottle from './pages/Bottle';
import Chair from './pages/Chair';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16"> {/* Add padding top to account for sticky navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bottle" element={<Bottle />} />
            <Route path="/chair" element={<Chair />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
