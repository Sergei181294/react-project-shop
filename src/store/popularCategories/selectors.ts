import type { RootStore } from "..";
import type { PopularCategoriesStore } from "./slice"


export const getLoadStatusPopularCategories = (store: RootStore):PopularCategoriesStore["loadStatus"] => store.popularCategories.loadStatus;

export const getPopularCategoriesFromStore = (store: RootStore):PopularCategoriesStore["data"] => store.popularCategories.data;



