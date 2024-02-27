import React from "react";
import { BrowserRouter , Router, Route } from "react-router-dom"
import Containter from 'react-bootstrap/Container'
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
const App = () => {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Containter>
          <Route path="/" element={<HomeScreen/>} exact/>
        </Containter>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
