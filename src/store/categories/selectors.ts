import type { RootStore } from "..";
import { CategoriesStore } from "./slice";

export const getLoadStatusCategories = (store: RootStore):CategoriesStore["loadStatus"] => store.categories.loadStatus;

export const getCategoriesFromStore = (store: RootStore):CategoriesStore["categories"] => store.categories.categories;