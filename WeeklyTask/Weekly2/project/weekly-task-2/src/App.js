import '../src/assets/style/style.css'

import Header from './component/Navbar';
import Hero from './component/Hero';
import Contact from './component/Contact';
import Footer from './component/Footer';
import About from './component/About';

function App() {
  return (
    <div className="App">
        <Header/>
        <div className='main'>
            <Hero/>
            <About/>
            <Contact/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
