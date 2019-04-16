import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import { actions as toastrActions } from "react-redux-toastr";
import api from "../../services/api";

import AuthActions from "../ducks/auth";

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, "signin", { email, password });

    localStorage.setItem("@Meetapp:token", response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));
    yield put(push("/"));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Falha no login",
        message: "Verifique se os dados informados estão corretos"
      })
    );
  }
}

export function* signUp({ username, email, password, password_confirmation }) {
  try {
    const response = yield call(api.post, "signup", {
      username,
      email,
      password,
      password_confirmation
    });

    localStorage.setItem("@Meetapp:token", response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));
    yield put(push("/"));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Falha no cadastro",
        message: "Verifique se os dados informados estão válidos"
      })
    );
  }
}

export function* signOut() {
  localStorage.removeItem("@Meetapp:token");

  yield put(push("/signin"));
}
