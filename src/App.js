import { Routes, Route} from "react-router-dom";
import './App.css';
import Box from '@mui/material/Box';
import BackToTop from "./components/ScrollToTop/ScrollToTop";
import Home from  './pages/Home/Home';
import NoMatch from './pages/NoMatch/NoMatch';
import NavBar from './components/NavBar/NavBar'


function App() {
  return (
    <div className="App">
      <NavBar/>
       <Box sx={{ }}>
        <Routes>
          <Route path="/"  exact element={<Home/>} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Box>
      <BackToTop/>
      <div>
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;
