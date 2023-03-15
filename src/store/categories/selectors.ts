import type { RootStore } from "..";
import { LOAD_STATUSES_TYPES } from "types";
import { Category } from "types";

export const getLoadStatusCategories = (store: RootStore):LOAD_STATUSES_TYPES => store.categories.loadStatus;

export const getCategoriesFromStore = (store: RootStore):Category[] => store.categories.categories;