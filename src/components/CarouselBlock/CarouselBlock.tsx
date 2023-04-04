import { FC } from "react"
import { Button } from "antd";
import css from "./carouselBlock.module.css"
import { Link } from "react-router-dom";

interface CarouselBlockProps {
       img: any;
       alt: string;
       title: string;
       subtitle: string;
       btnValue: string;
       link: string;
}

export const CarouselBlock: FC<CarouselBlockProps> = ({ img, alt, title, subtitle, btnValue, link }) => {
       return (
              <>
                     <div className={css.blockCarousel}>
                            <img className={css.imgCarousel} src={img} alt={alt} />
                            <h1 className={css.titleBook}>{title}</h1>
                            <p className={css.subtitleBook}>{subtitle}</p>
                            <Link to={link}>
                                   <Button className={css.btnCarouselBook}>{btnValue}</Button>
                            </Link>
                     </div>
              </>
       )
}