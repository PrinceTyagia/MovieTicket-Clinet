import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const movieDataList = createAsyncThunk(
  "movie/movieDataList",
  async () => {
    try {
      const { data } = await axios.get(``);
      return data;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  movieData: [
    {
      id: 1,
      name: "prince",
      class: "bca",
    },
  ],
  cartData: [],
};
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state) => {
      return state;
    },
  },
  extraReducers: {
    [movieDataList.fulfilled]: (state, actions) => {},
  },
});

export const { addMovie } = movieSlice.actions;

export default movieSlice.reducer;
