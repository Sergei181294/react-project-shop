import { Carousel, Button } from "antd";
import { CarouselBlock } from "../CarouselBlock";
import css from "./carousel.module.css"
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg"
import { v4 as uuidv4 } from "uuid"

const carouselArray = [
       {
              src: img1,
              alt: "presents",
              title: "Книги со скидкой 20%",
              subtitle: "Издательство «АСТ»",
              buttonText: "Выбрать товары"
       },
       // {
       //        src: img2,
       //        alt: "books",
       //        title: "Подарки со скидками до 50%",
       //        subtitle: "Косметика, техника, сладости",
       //        buttonText: "Выбрать товары"
       // }
]

export const CarouselSlider = () => {
       return (
              <Carousel autoplay dots={false} className={css.carousel}>

                     {carouselArray.map(item => <CarouselBlock
                            key={uuidv4()}
                            img={item.src}
                            alt={item.alt}
                            title={item.title}
                            subtitle={item.subtitle}
                            btnValue={item.buttonText}
                     />
                     )}
                     {/* <div className={css.blockCarousel}>
                                   <img className={css.imgCarousel} src={img1} alt="presents" />
                                   <h1 className={css.titleBook}>Книги со скидкой 20%</h1>
                                   <p className={css.subtitleBook}>Издательство «АСТ»</p>
                                   <Button className={css.btnCarouselBook}>Выбрать товары</Button>
                            </div> */}
                     {/* <div className={css.blockCarousel}>
                                   <img className={css.imgCarousel} src={img2} alt="books" />
                                   <h1 className={css.titlePresents}>Подарки на 8 марта со скидками до 50%</h1>
                                   <p className={css.subtitlePresents}>Косметика, книги, техника, сладости</p>
                                   <Button className={css.btnCarouselPresents} >Выбрать товары</Button>
                            </div> */}
              </Carousel>
       )
}