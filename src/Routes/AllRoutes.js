import NoPage from '../pages/NoPage';
import MovieDetails from '../pages/MovieDetails';
import MovieSeatPlan from '../pages/MovieSeatPlan';
import MovieCheckout from '../pages/MovieCheckout';
import Popcorn from '../pages/Popcorn';
import MovieTicketPlan from '../pages/MovieTicketPlan';
import MovieGrid from '../pages/MovieGrid';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const allPublicRoutes = [
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"movie-grid",
            element:<MovieGrid/>
        },
        {
            path:"movie-details",
            element:<MovieDetails/>
        },
        {
            path:"movie-ticket-plan",
            element:<MovieTicketPlan/>
        },
        {
            path:"movie-seat-plan",
            element:<MovieSeatPlan/>
        },
        {
            path:"movie-checkout",
            element:<MovieCheckout/>
        },
        {
            path:"popcorn",
            element:<Popcorn/>
        },
        {
            path:"*",
            element:<NoPage/>
        },
]

const allAuthRoute = [
    {
        path:"/sign-in",
        element:<SignIn/>
    },
    {
        path:"/sign-up",
        element:<SignUp/>
    },
]

export {allPublicRoutes,allAuthRoute}