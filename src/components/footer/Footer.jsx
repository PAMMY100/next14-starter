import styles from "./footer.module.css"
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>samsdev</div>
      <div className={styles.text}>
        Sam's creative thoughts agency @ All rights reserved.
      </div>
    </div>
  )
}

export default Footer;