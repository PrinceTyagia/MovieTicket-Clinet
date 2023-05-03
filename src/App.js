import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

import { allAuthRoute, allPublicRoutes } from "./Routes/AllRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {allPublicRoutes &&
              allPublicRoutes.map((cv, idx, arr) => {
                return <Route path={cv.path} element={cv.element} />;
              })}
          </Route>
          {allAuthRoute &&
            allAuthRoute.map((cv, idx, arr) => {
              return <Route path={cv.path} element={cv.element} />;
            })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
