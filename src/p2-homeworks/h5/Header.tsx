import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from './Routes';
import styles from './Header.module.css'


function Header() {
    return (
        <nav className={styles.header_block}>
            <div>
                <span className={styles.header_block_button}>
                    <NavLink to={PATH.PRE_JUNIOR} activeClassName={styles.activeLink}>Pre Junior</NavLink>
                </span>
                <span className={styles.header_block_button}>
                    <NavLink to={PATH.JUNIOR} activeClassName={styles.activeLink}>Junior</NavLink>
                </span>
                <span className={styles.header_block_button}>
                    <NavLink to={PATH.JUNIOR_PLUS} activeClassName={styles.activeLink}>Junior Plus</NavLink>
                </span>
            </div>
        </nav>

    );
}

export default Header;
