import { Link, useNavigate } from "react-router-dom"
import { Button, AutoComplete } from 'antd';
import css from "./header.module.css"
import { useState, useEffect, useCallback } from "react"
import debounce from 'lodash/debounce';
import { getGoods } from "api";
import { Good } from "types";
import { useAppSelector } from 'hooks/hooks';
import { getIsAuth, getLogin } from 'store/auth/selectors';
import { getCommonCount } from "store/cart/selectors";

export interface Params {
       text: string;
}

export const Header = () => {

     
       const navigate = useNavigate()
       const isAuth = useAppSelector(getIsAuth)
       const commonCount = useAppSelector(getCommonCount)

       const [params, setParams] = useState<Params>({ text: "" });
       const [goods, setGoods] = useState<Good[]>([])

       const fetchedDebounce = useCallback(debounce((params) => getGoods(params).then(data => setGoods(data.items)), 1500), [])

       useEffect(() => {
              fetchedDebounce(params)
       }, [params])

       const updateParams = (value: string) => {
              setParams((prevParams) => ({ ...prevParams, text: value }));
       };

       const handlerOut = () => {
              localStorage.setItem("userToken", "")
              window.location.reload()
       }

       return (
              <>
                     <div id="header" className={css.headerWrapper}>
                            <Link to="/">
                                   <div className={css.headerLogo}>
                                          <img src="https://oz.by/img/module-header/logo-5.v1676023879.png" alt="logo-shop" />
                                   </div>
                            </Link>
                            <div className={css.searchAuthAndBasketBlock}>                                 
                                          <AutoComplete
                                                 style={{ width: 780 }}
                                                 placeholder="Введите название товара..."
                                                 options={(goods || []).map((good) => ({
                                                        key: good.id,
                                                        value: good.label,
                                                        label: good.label
                                                 }))}
                                                 filterOption={true}
                                                 onSelect={(_, { key }) => navigate(`/goods/${key}`)}
                                                 onChange={updateParams}
                                                 allowClear

                                          />
                                   {isAuth && <Button className={css.searchButton} onClick={handlerOut}>Выйти</Button>}
                                   {!isAuth && <Link to="/login"><Button className={css.searchButton}>Войти</Button> </Link>}

                                   {isAuth && <Link to="/api/cart" className={css.basket}>
                                          <span className={css.bas}>Корзина</span>
                                          {commonCount > 0 && <span className={css.goodsCount}>{commonCount}</span>}
                                   </Link>
                                   }


                            </div>
                     </div>
              </>
       )

}