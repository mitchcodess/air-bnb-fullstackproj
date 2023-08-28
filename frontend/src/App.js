import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate} from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation/Navigation";
import LandingPage from "./components/LandingPage/LandingPage";
import SpotPage from "./components/SpotPage/SpotPage";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />

      {isLoaded && (
        <Routes>
          <Route path = '/' element = {<LandingPage/>}/>
          <Route path = '/spots/:spotId' element={<SpotPage/>}/>
          <Route path = '*' element = {<Navigate to='/'/>}/>
        </Routes>
      )}
    </>
  );
}

export default App;