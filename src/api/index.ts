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

const add = (url: string, product:Good ) => {

       fetch(new URL(url, BASE_URL), {
              method: 'PUT',
              body: JSON.stringify(product),
              headers: {
                     'Content-Type': 'application/json'
              }
       })
              .then(response => response.json())
              .then(data => {
                     console.log('Product added to cart:', data);
              })
              .catch(error => {
                     console.log('Error:', error);
              });
}


export const getCategories = (): Promise<{ categories: Category[] }> => getData("/api/categories");

export const getGoods = (params?: { text?: string, ids?: string, categoryTypeIds?: string }): Promise<{ items: Good[]; total: number }> => getData("/api/goods", params);

export const getPopularCategories = (): Promise<{ category: Category, items: Good[] }[]> => getData("/api/popular_categories");

export const addToCart = (product: Good) => add("api/cart", product);
