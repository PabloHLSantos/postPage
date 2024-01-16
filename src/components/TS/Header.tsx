import styles from '../Modules/Header.module.css';
import headerImg from '../assets/headerImg.svg';

export function Header(){
    return(
        <header className={styles.header}>
            <img src={headerImg} alt="Logotipo Header" />
            <h1>PgPosts</h1>
        </header>
    );
}