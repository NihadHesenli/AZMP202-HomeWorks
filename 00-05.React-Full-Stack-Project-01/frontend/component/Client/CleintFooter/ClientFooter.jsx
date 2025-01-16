import styles from './index.module.scss'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { LuHandMetal } from "react-icons/lu";
import { ImSteam } from "react-icons/im";

const ClientFooter = () => {
  return (
    <div className={styles['footer']}>
        <div className={styles['text']}>
            <p>Copyright ©2025 All rights reserved | This template is made with <LuHandMetal/> by <span>Niad</span></p>
        </div>
        <div className={styles['icons']}>
            <div className={styles['icon']}>
        <FaFacebookF />
            </div>
            <div className={styles['icon']}>
        <FaDiscord />
            </div>
            <div className={styles['icon']}>
        <FaTwitter />
            </div>
            <div className={styles['icon']}>
        <ImSteam />
            </div>
        </div>
    </div>
  )
}

export default ClientFooter