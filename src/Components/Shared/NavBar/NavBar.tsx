import styles from './Navbar.module.css';
import styled from 'styled-components';

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
                <a className={styles.title} href="/">Home</a>
                <div className={styles.menu}>
                    <ul className={styles.menuItems}>
                        <li>
                            <a href="#blog">Blog</a>
                        </li>
                        <li>
                            <a href="#services">Writer Services</a>
                        </li>
                        <li>
                            <a href="#books">Books</a>
                        </li>
                    </ul>
                </div>
            </StyledNavBar>
    )
}

export default NavBar;