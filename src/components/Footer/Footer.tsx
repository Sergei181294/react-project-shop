import { Link } from "react-router-dom"
import css from "./footer.module.css"
import facebookLogo from "../../assets/images/footer/facebook.png";
import instaLogo from "../../assets/images/footer/insta.png";
import vkLogo from "../../assets/images/footer/vk.png"
import telegramLogo from "../../assets/images/footer/telegram.png"
import tiktokLogo from "../../assets/images/footer/tiktok.png"
import youtubeLogo from "../../assets/images/footer/youtube.png"


const networks = [
       {
              url: "https://vk.com/ozby_books",
              src: vkLogo,
              alt: "vkLogo"
       },
       {
              url: "https://www.facebook.com/www.oz.by/",
              src: facebookLogo,
              alt: "facebookLogo"
       },
       {
              url: "https://www.instagram.com/myozby/",
              src: instaLogo,
              alt: "instaLogo"
       },
       {
              url: "https://t.me/myozby",
              src: telegramLogo,
              alt: "telegramLogo"
       },
       {
              url: "https://www.tiktok.com/@myozby",
              src: tiktokLogo,
              alt: "tiktokLogo"
       },
       {
              url: "https://www.youtube.com/c/OZbychannel/featured",
              src: youtubeLogo,
              alt: "youtubeLogo"
       },
]

export const Footer = () => {
       return (
              <>
                     <div className={css.footer}>
                            <div>
                                   <p className={css.socialMediaNews}>Следите за акциями и новостями</p>
                                   <ul className={css.networks}>
                                          {networks.map(item => <li key={item.url}>
                                                 <a href={item.url} target="_blank">
                                                        <img src={item.src} alt={item.alt} />
                                                 </a>
                                          </li>)}
                                   </ul>
                            </div>
                            <div>
                                   <p className={css.socialMediaNews}>Скачайте мобильное приложение</p>
                            </div>
                     </div>

              </>
       )
}