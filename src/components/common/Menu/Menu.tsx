import { Link } from "react-router-dom"
import { Carousel, Button } from 'antd';
import css from "./menu.module.css"
import img1 from "../../../assets/images/img1.jpg"
import img2 from "../../../assets/images/img2.jpg"

const menuList = ["Сувениры", "Книги", "Техника"]

export const Menu = () => {

       return (
              <div className={css.menuWrapper}>
                     <ul>
                            {menuList.map((item, index) =>
                                   <Link to="/" key={index} className={css.categoriesLink}>
                                          <p className={css.categories}>{item}</p>
                                   </Link>)}
                     </ul>
                     <Carousel autoplay dots={false} className={css.carousel}>
                            <div className={css.blockCarousel}>
                                   <img className={css.imgCarousel} src={img1} alt="presents" />
                                   <h1 className={css.titleBook}>Книги со скидкой 20%</h1>
                                   <p className={css.subtitleBook}>Издательство «АСТ»</p>
                                   <Button className={css.btnCarouselBook} >Выбрать товары</Button>
                            </div>
                            {/* <div className={css.blockCarousel}>
                                   <img className={css.imgCarousel} src={img2} alt="books" />
                                   <h1 className={css.titlePresents}>Подарки на 8 марта со скидками до 50%</h1>
                                   <p className={css.subtitlePresents}>Косметика, книги, техника, сладости</p>
                                   <Button className={css.btnCarouselPresents} >Выбрать товары</Button>

                            </div> */}
                            {/* <div>
                                   <h3 style={contentStyle}>3</h3>
                            </div>
                            <div>
                                   <h3 style={contentStyle}>4</h3>
                            </div> */}
                     </Carousel>
              </div>
       )

}