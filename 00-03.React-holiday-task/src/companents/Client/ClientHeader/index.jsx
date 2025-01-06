import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'
import { useContext } from 'react'
import { FavoritestContext } from '../../../context/FavoriteContext'
import { BasketContext } from '../../../context/BasketContext'

const ClientHeader = () => {
   const {fav} = useContext(FavoritestContext)
   const {basket} = useContext(BasketContext)
  return (
    <header>
        <div className="header">
            <div className="container">
                <div className={styles['head']}>
                <h2>MetalVinyls<span>.</span></h2>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/products"}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/favorites"}>Favorites <span>{fav.length}</span></NavLink>
                        </li>
                        <li>
                            <NavLink to={"/basket"}>Basket <span>{basket.reduce((all, current) => all + current.quantity, 0)}</span></NavLink>
                        </li>
                    </ul>
                </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default ClientHeader