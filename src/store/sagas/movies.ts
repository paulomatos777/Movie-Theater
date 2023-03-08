import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../services/api";
import { errorHandler } from "../../services/handler";
import { MovieActions } from "../slices/movies";

function* fetchMovieData() {
  try {
    const { data } = yield call(
      api.get,
      "/movie?title=skyfall&apikey=8384263e"
    );

    yield put(MovieActions.fetchMovieDataSuccess(data));
  } catch (error) {
    errorHandler(error, "Falha ao obter os dados do filme");
    yield put(MovieActions.fetchMovieDataError());
  }
}

export default [takeLatest(MovieActions.fetchMovieData.type, fetchMovieData)];
