import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Contacts from "./components/Contacts/Contacts";
import Videos from "./components/Videos/Videos";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Stock from "./components/Stock/Stock";

function App() {
  return (<BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/*'
               element={<Content/>}/>
        <Route path='/contacts'
               element={<Contacts/>}/>
        <Route path='/videos'
               element={<Videos/>}/>
        <Route path='/portfolio'
               element={<Portfolio/>}/>
        <Route path='/stock'
               element={<Stock/>}/>
        <Route path='/about'
               element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  </BrowserRouter>);
}

export default App;


