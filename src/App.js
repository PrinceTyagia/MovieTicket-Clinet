import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import ContextProvider from './useContext/ContextProvider';
import { allAuthRoute, allPublicRoutes } from './Routes/AllRoutes';




function App() {
      
    return (
      <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {allPublicRoutes && allPublicRoutes.map((cv,idx,arr) => {
                return (
                  <Route path={cv.path} element={cv.element}  />
                )
              })}
            </Route>
            {
              allAuthRoute && allAuthRoute.map((cv,idx,arr) => {
                return (
                  <Route path={cv.path} element={cv.element}  />
                )
              })
            }
          </Routes>
        </BrowserRouter>
        </ContextProvider>
      </>    
    );
} 

export default App;
