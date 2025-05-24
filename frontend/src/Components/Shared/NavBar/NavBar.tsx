import styles from './Navbar.module.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavBar = styled.nav`
display: flex;
max-width: 75%;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 5px;
margin-top: 10px;
margin-left: auto;
margin-right: auto;
`;

export const NavBar = () => {

    return (
            <StyledNavBar className={styles.navbar}>
                <Link className={styles.title} to="/">Home</Link>
                <div className={styles.menu}>
                    <ul className={styles.menuItems}>
                        <li>
                            <Link to="/books">Books</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/kickstarter">Kickstarters</Link>
                        </li>
                        {/* <li>
                            <Link to="/services">Writer Services</Link>
                        </li> */}
                    </ul>
                </div>
            </StyledNavBar>
    )
}

export default NavBar;