
import './App.css';


import Header from "./components/header/Header";
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qulification from './components/qualification/Qualification';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/scrollUp';


function App() {
  return (
    <div className="App">
        <Header/>

        <div className='main'>
          <Home />
          <About />
          <Skills />
          <Qulification />
          <Portfolio />
        </div>
        <Footer />
        <ScrollUp />
    </div>
  );
}

export default App;
