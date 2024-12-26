import { Link } from 'react-router-dom';
import styles from './header.module.css'


const Header = () => {
    return (
        <ul className={styles.header}>
            <li className={styles.homePage}>
                <Link to="/">Coins Wiki</Link>
            </li>
        </ul>
    );
};
export default Header;
