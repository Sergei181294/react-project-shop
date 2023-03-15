import { Link } from "react-router-dom"
import { Input, Button, Divider, Select } from 'antd';
import css from "./header.module.css"
import { useState, useEffect, useCallback } from "react"
import debounce from 'lodash/debounce';
import { useDispatch, useSelector } from "react-redux";
import { actionsGoods } from "store/goods/slice";
import { getGoodsFromStore } from "store/goods/selectors";



export interface Params {
       text: string;
}

export const Header = () => {

       const [params, setParams] = useState<Params>({ text: "" });
       const dispatch = useDispatch()

       // const updateParams = (nextParams: Partial<Params>) => {
       //        setParams((prevParams) => ({ ...prevParams, ...nextParams }));

       // };

       const fetchGoodsDebounce = useCallback(debounce((params: Params) => dispatch(actionsGoods.goodsOnBack(params) as any), 1500), [dispatch])

       useEffect(() => {
              fetchGoodsDebounce(params);
       }, [params])

       const goods = useSelector(getGoodsFromStore)


       const { Option } = Select

       return (
              <>
                     <div className={css.headerWrapper}>
                            <Link to="/">
                                   <div className={css.headerLogo}>
                                          <img src="https://oz.by/img/module-header/logo-5.v1676023879.png" alt="logo-shop" />
                                   </div>
                            </Link>
                            <div className={css.searchAuthAndBasketBlock}>
                                   <Select
                                          showSearch
                                          style={{ width: 200 }}
                                          placeholder="Select a person"
                                          optionFilterProp="children"
                                          onChange={(e) => setParams({ text: e })}
                                          filterOption={(input, option) => option?.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}

                                   >
                                          {goods.map(good => <Option key={good.id} value={good.label} >{good.label}</Option>)}
                                   </Select>
                                   <Link to="/login">
                                          <Button className={css.searchButton} >Войти</Button>
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