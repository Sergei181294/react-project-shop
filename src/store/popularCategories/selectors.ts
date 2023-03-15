import type { RootStore } from "..";
import { LOAD_STATUSES_TYPES, Category, Good } from "types";


export const getLoadStatusPopularCategories = (store: RootStore):LOAD_STATUSES_TYPES => store.popularCategories.loadStatus;

export const getPopularCategoriesFromStore = (store: RootStore):{category:Category, items:Good[]}[] => store.popularCategories.data;



