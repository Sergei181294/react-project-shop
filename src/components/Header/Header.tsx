import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import { Button, Divider, AutoComplete } from 'antd';
import css from "./header.module.css"
import { useState, useEffect, useCallback } from "react"
import debounce from 'lodash/debounce';
import { getGoods } from "api";
import { Good } from "types";

export interface Params {
       text: string;
}

export const Header = () => {
       const navigate = useNavigate()
       const [params, setParams] = useState<Params>({ text: "" });
       const [goods, setGoods] = useState<Good[]>([{ categoryTypeId: "", description: "", id: "", img: "", label: "", price: "" }])
       const fetchedDebounce = useCallback(debounce((params) => getGoods(params).then(data => setGoods(data.items)), 1500), [])
       useEffect(() => {
              fetchedDebounce(params)
       }, [params])
       const updateParams = (value: string) => {
              setParams((prevParams) => ({ ...prevParams, text: value }));
       };
       // const goToProductPage = () => {
       //        navigate(`/goods/${}`)
       // }
       return (
              <>
                     <div className={css.headerWrapper}>
                            <Link to="/">
                                   <div className={css.headerLogo}>
                                          <img src="https://oz.by/img/module-header/logo-5.v1676023879.png" alt="logo-shop" />
                                   </div>
                            </Link>
                            <div className={css.searchAuthAndBasketBlock}>
                                   <AutoComplete
                                          style={{ width: 280 }}
                                          placeholder="Введите название товара..."
                                          options={(goods || []).map((good) => ({
                                                 key: good.id,
                                                 value: good.label,
                                                 label: good.label
                                          }))}
                                          filterOption={true}
                                          // onSelect={goToProductPage}
                                          onChange={(value) => { updateParams(value) }}
                                   />
                                   <Link to="/login">
                                          <Button className={css.searchButton}>Войти</Button>
                                   </Link>

                                   <Link to="/api/cart" className={css.basket}>
                                          <p className={css.bas}>Корзина</p>
                                   </Link>
                            </div>
                     </div>
                     <Divider className={css.devider} />
              </>
       )

}