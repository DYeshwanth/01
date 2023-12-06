// import logo from './logo.svg';
import './App.css';
import { Footer } from './components-meesho/Footer';
import { Header } from './components-meesho/Header';
import { Main } from './components-meesho/Main';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Example } from './components/AxiossExample';
import { F1 } from './components/f1';
import { F2 } from './components/f2';
import { Navbar } from './components-meesho/navbar';
import {HashRouter,Routes,Route} from "react-router-dom"; 
import { About, Contact, Home } from './components-meesho/chunk';
// import Yop from './components/Header'
// import {Main}  from './components/Main'


function App() {
  return (
    <>
    <HashRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Main />
      <Footer />
    </HashRouter>
    {/* <Example /> */}
    
    
    
    
    </>
    // <F2/>
    // <F1/>
    // <Example />

    // // <div className="App">
    // //   <h1>Welcome to react project</h1>
    // //   <img src='car1.avif'/>
    // // </div>
    // <>
    //   {/* // <div className="App">
    //   //   <h1>Welcome to react project</h1>
    //   //   <img src='car1.avif'/>
    //   // </div> */}
    //   {/* <Yop />
    //   <Main myrole = "Develpoer"/>
    //   <Main myName = "Fullstack"/>
    //   <Main myrole = "Learner"/>
    //   <Main myName = "CSE"/>
    //   <Main myName = "Develpoer"/> */}
    //   <Main />
    //   </>
       
  );
}

export default App;
