
import {NavLink, Link} from 'react-router-dom';
import styles from './header.module.css';
import Search from '../Search';
import imageBaby from '../images/header.jpg';
import imageStore from '../images/shopping-cart.png';


const Header = () => {

  return (
    <nav>
      <div className={styles.nav}>
        <Search />
        <img className={styles.navImg} src={imageBaby} />
      
       < img className={styles.store} src={imageStore} />
      <ul>
      
       <li><Link  to="sign">Sign in /</Link></li> 
       <li><Link  to="register">Register</Link></li>
      </ul>
      </div>
      <div className={styles.link}>
      <ul >
        <li><NavLink activeStyle={{backgroundColor: 'green'}} to="/home">HOME</NavLink></li>
        <li><NavLink activeStyle={{backgroundColor: 'green'}} to="/girl">BABY-GIRL</NavLink></li>
        <li><NavLink activeStyle={{backgroundColor: 'green'}} to="/boy" >BABY-BOY</NavLink></li>
        <li><NavLink activeStyle={{backgroundColor: 'green'}} to="/shoes">SHOES</NavLink></li>
        <li><NavLink activeStyle={{backgroundColor: 'green'}} to="/about" >ABOUT</NavLink></li>
      </ul>
    </div>
      
    </nav>

  )
}
export default Header;