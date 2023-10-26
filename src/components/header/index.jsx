import styles from './style.module.css';
import { Link } from 'react-router-dom';

const Header =( ) =>{

    return(
        <div className={styles.cont}>
            <nav className={styles.navbar}>
               <li className={styles.logo}><link rel="icon" href="#" /></li>
               <li><Link to='/' className={styles.headertext}>Home page</Link></li>
               <li><Link to='/chat' className={styles.headertext}>Chat</Link></li>
               <li><Link to ='/test' className={styles.headertext}>Load data</Link></li>
               <li><Link to ='/smart' className={styles.headertext}>Smart House</Link></li>
               <li><Link to ='/game' className={styles.headertext}>Mini Game</Link></li>
            </nav>
        </div>
    )
}


export default Header;