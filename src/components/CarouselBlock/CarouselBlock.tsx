import { FC } from "react"
import { Button } from "antd";
import css from "./carouselBlock.module.css"
 
interface CarouselBlockProps {
       img:any;
       alt:string;
       title:string;
       subtitle:string;
       btnValue: string;
}

export const CarouselBlock: FC<CarouselBlockProps> = ({img, alt, title, subtitle, btnValue}) => {
       return (
              <>
                     <div className={css.blockCarousel}>
                            <img className={css.imgCarousel} src={img} alt={alt} />
                            <h1 className={css.titleBook}>{title}</h1>
                            <p className={css.subtitleBook}>{subtitle}</p>
                            <Button className={css.btnCarouselBook}>{btnValue}</Button>
                     </div>
              </>
       )
}