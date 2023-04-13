
import './App.css';
import HomeOne from './pages/HomeOne';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import HomeTwo from './pages/HomeTwo';
import NoPage from './pages/NoPage';
import MovieDetails from './pages/MovieDetails';
import MovieSeatPlan from './pages/MovieSeatPlan';
import MovieCheckout from './pages/MovieCheckout';
import Popcorn from './pages/Popcorn';
import MovieTicketPlan from './pages/MovieTicketPlan';
import MovieGrid from './pages/MovieGrid';
import MovieList from './pages/MovieList';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MovieDetails2 from './pages/MovieDetails2';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomeOne />} />
              <Route path="index-2" element={<HomeTwo />}  />
              <Route path="movie-grid" element={<MovieGrid />}  />
              <Route path="movie-list" element={<MovieList />}  />
              <Route path="movie-details" element={<MovieDetails />}  />
              <Route path="movie-details-2" element={<MovieDetails2 />}  />
              <Route path="movie-ticket-plan" element={<MovieTicketPlan />}  />
              <Route path="movie-seat-plan" element={<MovieSeatPlan />}  />
              <Route path="movie-checkout" element={<MovieCheckout />}  />
              <Route path="popcorn" element={<Popcorn />}  />
              <Route path="about" element={<About />}  />
              <Route path="contact" element={<Contact />}  />
            </Route>
            <Route path="sign-in" element={<SignIn />}  />
            <Route path="sign-up" element={<SignUp />}  />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </>    
    );
} 

export default App;
