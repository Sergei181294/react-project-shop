import { GoodsStore } from "./slice";
import { RootStore } from "..";

export const getIsAuth = (state: RootStore):GoodsStore["isAuth"] => state.login.isAuth