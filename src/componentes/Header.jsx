import styles from './Header.module.css'

import ignitelogo from '../assets/Ignite-logo.svg';

export function Header(){
    return (
        <header className={styles.header}>
            <img src={Ignitelogo} alt='Logo Ignite' />
        </header>
    );
}