import { Carousel, Button } from "antd";
import css from "./carousel.module.css"
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg"

export const CarouselSlider = () => {
       return (
              <Carousel autoplay dots={false} className={css.carousel}>
                            <div className={css.blockCarousel}>
                                   <img className={css.imgCarousel} src={img1} alt="presents" />
                                   <h1 className={css.titleBook}>Книги со скидкой 20%</h1>
                                   <p className={css.subtitleBook}>Издательство «АСТ»</p>
                                   <Button className={css.btnCarouselBook} >Выбрать товары</Button>
                            </div>
                            <div className={css.blockCarousel}>
                                   <img className={css.imgCarousel} src={img2} alt="books" />
                                   <h1 className={css.titlePresents}>Подарки на 8 марта со скидками до 50%</h1>
                                   <p className={css.subtitlePresents}>Косметика, книги, техника, сладости</p>
                                   <Button className={css.btnCarouselPresents} >Выбрать товары</Button>
                            </div>
                     </Carousel>
       )
}