import { Category } from "../types";
import { Good } from "../types";

const BASE_URL = "http://localhost:3000/";

const getData = <T = unknown>(url: string, params: Record<string, string | number> = {}): Promise<T> => {
       const searchParams = new URLSearchParams({ ...params } as Record<string, string>);
       
       const fullUrl = new URL(url, BASE_URL);

       fullUrl.search = searchParams.toString();

       return fetch(fullUrl)
              .then((data) => {
                     if (data.ok) {
                            return data.json();

                     }
                     throw new Error("network is offline");
              });
}

export const getCategories = (): Promise<{ categories: Category[] }> => getData("/api/categories");

export const getGoods = (params?: { text?: string }): Promise<{ items: Good[]; total: number }> => getData("/api/goods", params);

export const getPopularCategories = (): Promise<{ category: Category; items: Good[] }[]> => getData("/api/popular_categories");


