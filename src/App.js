import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Header from "./Components/Header";
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import News from './Pages/News';
import Galery from './Pages/Galery';
import Contact from './Pages/Contact';
import Footer from "./Components/Footer";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/about' element={ <About /> }/>
        <Route path='/products' element={ <Products /> }/>
        <Route path='/news' element={ <News /> }/>
        <Route path='/galery' element={ <Galery /> }/>
        <Route path='/contact' element={ <Contact /> }/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
