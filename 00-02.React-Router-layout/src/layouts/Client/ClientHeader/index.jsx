import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'

const ClientHeader = () => {
  return (
    <header>
        <div className="header">
            <div className="container">
                <div className={styles['head']}>
                <h2>ClientLogo</h2>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/blog"}>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Contact"}>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
                <button>Log in</button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default ClientHeader