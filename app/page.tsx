import { FC } from 'react'
import Advantages from './ui/sections/advantages/Advantages'
import styles from './home.module.css'
import Start from './ui/sections/start/start'
import Form from './ui/sections/form/form'

const Page:FC = () => {

    return (
        <main className={styles.main}>
            <Start></Start>
            <Advantages></Advantages>
            <Form></Form>
        </main>
    )
}

export default Page