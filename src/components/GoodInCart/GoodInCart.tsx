import { Good } from "types";
import { FC } from "react"
import css from "./goodInCart.module.css"
import { Divider, Button } from "antd"
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { actions } from "store/cart/slice";

interface GoodInCart {
       good: Good;
       totalCount: number;
     
}



export const GoodInCart: FC<GoodInCart> = ({ good, totalCount }) => {

       const dispatch = useDispatch()
       return (
              <>
                     <div className={css.goodInCart}>
                            <div className={css.infoWrapper}>
                                   <img className={css.icon} src={good.img} alt="icon" />
                                   <div className={css.blockInfoGoodInCart}>
                                          <p className={css.name}>{good.label}</p>
                                          <p className={css.description}>{good.description}</p>
                                          <p className={css.price}>{good.price}</p>
                                   </div>
                            </div>
                            <div className={css.blockButton}>
                                   <Button shape="circle" icon={<PlusOutlined />} onClick={() => dispatch(actions.setItemInCart(good))}/>
                                   <p>{totalCount}</p>
                                   <Button shape="circle" icon={<MinusOutlined />} onClick={() => dispatch(actions.deleteItemFromCart())}/>
                            </div>
                     </div>
                     <Divider />
              </>
       )
}