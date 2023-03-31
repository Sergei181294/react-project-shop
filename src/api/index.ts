import { Category, Good } from "../types";
import { GoodInCart } from "store/cart/slice";

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

const postData = (url: string, body: Record<string, unknown>) => {
       const fullUrl = new URL(url, BASE_URL);
       return fetch(fullUrl, {
              method: "POST",
              body: JSON.stringify(body),
       }).then((data) => {
              if (data.ok) return data.json();
       })    
};

const putInCart = (url:string, body: Record<string, unknown>) => {
       return fetch(new URL(url, BASE_URL), {
              method:"PUT",
              body: JSON.stringify(body),
       })
       .then((data => {
              if(data.ok){
                     return data.json()
              }
              throw new Error("oops")
       }))
}


export const getCategories = (): Promise<{ categories: Category[] }> => getData("/api/categories");

export const getGoods = (params?: { text?: string, ids?: string, categoryTypeIds?: string, limit?: number, offset?: number, minPrice?: number, maxPrice?: number, sortBy?: keyof Good, sortDirection?: 'asc' | 'desc' }): Promise<{ items: Good[]; total: number }> => {
       return getData("/api/goods", params)
};
export const getPopularCategories = (): Promise<{ category: Category, items: Good[] }[]> => getData("/api/popular_categories");

export const registration = (body: any): any => postData("/api/registration", body);

export const login = (credentials:{login: string; password: string}): Promise<{login: string, token:string}> => postData("/api/login", credentials)

export const addToCart = (body:{good?: Good, count?:number, id?:string}): Promise<GoodInCart[]> => putInCart("/api/cart", body)

export const getCart = ():Promise<GoodInCart[]> => getData("/api/cart")