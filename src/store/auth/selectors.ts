import { GoodsStore } from "./slice";
import { RootStore } from "..";

export const getIsAuth = (state: RootStore):GoodsStore["isAuth"] => state.login.isAuth

export const getLogin = (state: RootStore):GoodsStore["login"] => state.login.login