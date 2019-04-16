import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  signInRequest: ["email", "password"],
  signInSuccess: ["token"],
  signOut: null,
  signUpRequest: ["username", "email", "password", "password_confirmation"]
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem("@Meetapp:token"),
  token: localStorage.getItem("@Meetapp:token") || null
});

export const success = (state, { token }) =>
  state.merge({ signedIn: true, token });

export const logout = state => state.merge({ signedIn: false, token: null });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_OUT]: logout
});
