import emptyCart from "assets/images/emptyCart.webp"
import css from "./emptyCart.module.css"

export const EmptyCart = () => {
       return (
              <div className={css.emptyCartWrapper}>
                     <h2 className={css.emptyCart}>
                            В корзине пусто. Чтобы найти товары, используйте поиск или выберите товары из просмотренных ранее.
                     </h2>
                     <p className={css.imgWrapper}>
                            <img className={css.imgCart} src={emptyCart} alt="icon"></img>
                     </p>
              </div>
       )
}