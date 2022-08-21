import './App.css';
import Tecnology from './components/tecnology';
import Banner from './components/banner';
import Navbar from './components/navbar';
import Experience from './components/experience';
import Proyects from './components/proyects';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Tecnology/>
      <Experience/>
      <Proyects/>
      <Footer/>
    </div>
  );
}

export default App;
