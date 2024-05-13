import { Routes, Route} from "react-router-dom";
import './App.css';
import Box from '@mui/material/Box';
import BackToTop from "./components/ScrollToTop/ScrollToTop";
import Home from  './pages/Home/Home';
import NoMatch from './pages/NoMatch/NoMatch';
import NavBar from './components/NavBar/NavBar';
import Toolbar from '@mui/material/Toolbar';
import Footer from './components/Footer/Footer';
import Carousel from "./components/Carousel/Carousel";


function App() {
  return (
    <div className="App" id="back-to-top-anchor" >
      <NavBar/>
       <Box sx={{ }} >
       <Toolbar sx={{display: {xs: 'block', md: 'none'}}}/>
        <Routes>
          <Route path="/"  exact element={<Home/>} />
          <Route path="/carousel"  exact element={<Carousel/>} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Box>
      <BackToTop/>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
