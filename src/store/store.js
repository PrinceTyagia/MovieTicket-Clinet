import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./features/movieData/movieSlice";

const store = configureStore({
  reducer: {
    movies: movieSlice,
  },
});

export default store;
