import { Link } from "react-router-dom"
import { Input, Button, Divider } from 'antd';
import css from "./header.module.css"


const { Search } = Input;

export const Header = () => {
       return (
              <>
                     <div className={css.headerWrapper}>
                            <Link to="/">
                                   <div className={css.headerLogo}>
                                          <img src="https://oz.by/img/module-header/logo-5.v1676023879.png" alt="logo-shop" />
                                   </div>
                            </Link>
                            <div className={css.searchAuthAndBasketBlock}>
                                   <Search placeholder="Введите название товара" style={{ width: 800 }} />
                                   <Button className={css.searchButton} >Войти</Button>
                                   <Link to="/" className={css.basket}>
                                          <p className={css.bas}>Корзина</p>
                                   </Link>
                            </div>
                     </div>
                     <Divider className={css.devider}/>
              </>
       )

}