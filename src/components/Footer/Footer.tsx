
import css from "./footer.module.css"
import facebookLogo from "assets/images/footer/facebook.png";
import instaLogo from "assets/images/footer/insta.png";
import vkLogo from "assets/images/footer/vk.png"
import telegramLogo from "assets/images/footer/telegram.png"
import tiktokLogo from "assets/images/footer/tiktok.png"
import youtubeLogo from "assets/images/footer/youtube.png"


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
                                          <div className={css.linkBlock}>
                                                 <a className={css.downloadGooglePlay} href="https://play.google.com/store/apps/details?id=by.oz.android&referrer=utm_source%3Dmainsite%26utm_medium%3Dfooter%26utm_campaign%3D" >
                                                        Google Play
                                                 </a>
                                                 <a className={css.downloadAppStore} href="https://apps.apple.com/us/app/oz/id1224520373?l=ru" >
                                                        App Store
                                                 </a>
                                                 <a className={css.downloadAppGallery} href="https://appgallery.huawei.com/#/app/C104293475" >
                                                        App Gallery
                                                 </a>
                                          </div>
                                   </div>
                            </div>
                            <div>
                                   <p className={css.socialMediaNews}>OZ.by™, ООО «Приносим радость», 1999—2023</p>
                                   <a className={css.linkTrade} href="https://oz.by/help/assistant.phtml?l=i.license">В торговом реестре Республики Беларусь с 17 августа 2022 года</a>
                            </div>
                     </div>

              </>
       )
}