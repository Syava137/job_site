import { FC, MouseEventHandler } from 'react'
import Question from './question'
import styles from './form.module.css'
import Link from 'next/link';

const questions = [
    {
        title: 'Выберите город',
        values: ['Москва', 'Санкт-Петербург']
    },
    {
        title: 'Ваш возраст',
        values: null
    },
    {
        title: 'Самозанятость',
        values: ['Есть/Готов оформить', 'Нет/Не готов оформить']
    },
    {
        title: 'Медицинская книжка',
        values: ['Есть/Готов оформить', 'Нет/Не готов оформить']
    },
]

const Form:FC = () => {

    return (
        <section>
            <form action="" method="post">
                <fieldset className={styles.form}>
                    <legend>Анкета соискателя</legend>
                        {questions.map((v, i)=>(
                            <Question title={v.title} values={v.values} key={i}></Question>
                        ))}
                    {/* <Link href='/submited' className={styles.buttonSubmit} ><button  type="button">Подобрать</button></Link> */}
                    <Link href='/submited' className={styles.buttonSubmit} >Подобрать</Link>
                </fieldset>
            </form>
        </section>
    )
}

export default Form