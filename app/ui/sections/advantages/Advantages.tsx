import { FC } from 'react'
import Advantage from '../../components/advantage/advantage'
import styles from './advantages.module.css'

const advantages = [
    {
        url: '',
        text: 'Супер пупер'
    },
    {
        url: '',
        text: 'Супер пупер'
    },
    {
        url: '',
        text: 'Супер пупер'
    },
    {
        url: '',
        text: 'Супер пупер'
    },
    {
        url: '',
        text: 'Супер пупер'
    },
    {
        url: '',
        text: 'Супер пупер'
    },
]

const Advantages:FC = () => {

    return (
        <section className={styles.advantages}>
            {advantages.map((v, i)=>(
                <Advantage url={v.url} text={v.text} key={i}></Advantage>
            ))}
        </section>
    )
}

export default Advantages