import './App.css';
import './style.css';
import './contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar.js'
import Header from './components/header.js'
import About from './components/about.js';
import Contact from './components/contact.js';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Contact />
    </div>
  );
}

export default App;
