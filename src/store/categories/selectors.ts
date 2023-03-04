import type { RootStore } from "..";

export const getLoadStatusCategories = (store: RootStore) => store.categories.loadStatus;

export const getCategoriesFromStore = (store: RootStore) => store.categories.categories;