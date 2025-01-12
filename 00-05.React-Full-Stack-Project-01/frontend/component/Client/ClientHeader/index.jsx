import styles from'./index.module.scss'
import image from '../../../images/logo.png.webp'
import {PhoneOutlined} from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

const ClientHeader = () => {
  return (
    <> 
        <div className={styles['header-top']}>
            <p>We believe we helps people
            for happier lives</p>
            <img src={image} alt="logo" />
            <div className={styles['header-phone']}>
                <p>+880 123 12 658 439</p>
                <PhoneOutlined className={styles['phone']} />
            </div>
        </div>
        <hr />
        <div className={styles['header-bottom']}>
          <nav>
            <ul>
              <li>
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink>WishList</NavLink>
              </li>
              <li>
                <NavLink>Blog</NavLink>
              </li>
            </ul>
          </nav>
        </div>
    </>
  );
};

export default ClientHeader;
