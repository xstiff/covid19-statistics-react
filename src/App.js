import {BrowserRouter as Router, Routes, Route, redirect} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

//Components
import { Menu } from "./components/menu/menu";

//Pages
import { Home } from "./components/home/home";


//NOTE
//NOTE
//NOTE
//NOTE
//    I was very low on time (because of school). Basically I only had one day to finish it all. If I had more time the code would look cleaner
//    I would add comments to explain code for better understanding.
//    I would make the whole app responsive for mobile devices.
//    
//NOTE
//NOTE
//NOTE
//NOTE


const App = () => {
  return (
    <>
        <Router>
          <Menu />

          <Routes> {/*not needed at all*/}
            <Route path='/' element={<Home />} />
          </Routes>
          
        </Router>
        <ToastContainer />
    </>
  );
}

export default App;
