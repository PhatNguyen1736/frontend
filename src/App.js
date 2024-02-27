import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomeScreen from "./screens/HomeScreen";
const App = () => {
  return (
    // <BrowserRouter>
      <BrowserRouter>
        <Routes>
          {/* <Header/> */}
            <Route path="/" element={<HomeScreen/>} exact/>
            {/* </Route> */}
          {/* <Footer/> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
