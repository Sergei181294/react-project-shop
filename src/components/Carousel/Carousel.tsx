import { Carousel } from "antd";
import { CarouselBlock } from "../CarouselBlock";
import css from "./carousel.module.css"
import img1 from "assets/images/img1.jpg"
import img2 from "assets/images/img2.jpg"
import { v4 as uuidv4 } from "uuid"

const carouselArray = [
       {
              src: img1,
              alt: "presents",
              title: "Книги со скидкой до 20%",
              subtitle: "Издательство «АСТ»",
              buttonText: "Выбрать товары",
              link: "/categories/books",
       },
       {
              src: img2,
              alt: "books",
              title: "Подарки со скидками до 50%",
              subtitle: "Косметика, парфюм",
              buttonText: "Выбрать товары",
              link: "/categories/cosmetics",
       }
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
                            link={item.link}
                     />
                     )}
              </Carousel>
       )
}