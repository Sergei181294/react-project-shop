import type { RootStore } from "..";

export const getLoadStatus = (store: RootStore) => store.categories.loadStatus;

export const getCategoriesFromStore = (store: RootStore) => store.categories.categories;