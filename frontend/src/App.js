import './App.css';
import Navbar from './components/Navbar';
import Analyze from './pages/Analyze';
import Hero from './pages/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analyze />
    </div>
  );
}

export default App;
