import styles from "../styles/Navigation.module.scss"
import Image from "next/image"

const Navigation = ({ locale, locales }) => {
  const resolveMovies = {
    en: 'Kort',
    fr: 'Court'
  }
  const resolvePeople = {
    en: 'Assortiment',
    fr: 'Gamme de produits',
  }
  const resolveNews = {
    en: 'Nieuws',
    fr: 'Des nouvelles',
  }
  const resolveContact = {
    en: 'Contact',
    fr: 'Contact',
  }
  let homeurl = "/";
  if (locale != 'default') {
    homeurl = "/" + locale;
  }

  const defaultLocale = locale === 'en' ? '/' : `/${locale}/`
  return (
    <header className={styles.navigationwrapper}>
      <nav className={styles.navigation} role="navigation">

        <div className={styles.navlogo}>
          <a href={homeurl}>
            {/* <img
              src=""C:\Source\Bakkerij Denolf\Bakkerij Denolf\.next\cache\images\Banner.jpg""
              alt="Bakkerij Denolf Logo"
              className=""
            /> */}
            <Image src="/Logo.jpg" alt="Bakkerij Denolf Logo" width="75px" height="75px" />
          </a>
        </div>
        <div className={styles.navlinkswrapper}>
          <div className={styles.navlinks}>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/movies`} className={styles.movie}>{resolveMovies[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/people`} className={styles.personality}>{resolvePeople[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/news`} className={styles.newsitem}>{resolveNews[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/shop`} className={styles.product}>{resolveContact[locale]}</a>
            </div>
          </div>
          <div className={styles.navlocales}>
            {
              locales.map(loc => {
                return (<div className={styles.navlocale} key={loc}>
                  <a href={`/${loc}`} className={`${locale === loc ? "selected" : ""}`}>{loc}</a>
                </div>)
              })
            }
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navigation
