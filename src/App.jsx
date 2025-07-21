import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Landing from "./pages/Landing";
import MainPage from "./pages/MainPage";
import MinigameGacha from "./pages/minigameGacha";
import LoadingScreen from "./components/Loading";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route
            path='/main'
            element={<MainPage />}
          />
          <Route
            path='/loading'
            element={<LoadingScreen />}
          />
          <Route
            path='/gachagame'
            element={<MinigameGacha />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
