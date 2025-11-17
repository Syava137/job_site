import { FC } from 'react'
import styles from './header.module.css'
import Image from 'next/image'

const Header:FC = () => {

    return (
        <header className={styles.header}>
            КОМПАС
            <Image 
                className={styles.img}
                width={90}
                height={90}
                src="/compasLogo.svg"
                alt="Логотип компании"
                priority={true}
             />
            РАБОТА
        </header>
    )
}

export default Header