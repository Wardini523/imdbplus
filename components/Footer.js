import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer}>

        <div className="">
          <img
            src="/Banner.png"
            alt="Bakkerij Denolf Banner"
            width="350" 
            className=""
          />
        </div>
      </div>
    </footer>



  )
}

export default Footer
