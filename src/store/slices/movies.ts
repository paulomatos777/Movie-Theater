import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieState, Movie } from "../types";

const initialState: MovieState = {
  loading: false,
  selectedMovie: null,
};

export const slice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMovieData: (state) => {
      state.loading = true;
    },
    fetchMovieDataSuccess: (state, { payload }: PayloadAction<Movie>) => {
      state.selectedMovie = payload;
      state.loading = false;
    },
    fetchMovieDataError: (state) => {
      state.loading = false;
    },
  },
});

export const MovieActions = slice.actions;

export default slice.reducer;
