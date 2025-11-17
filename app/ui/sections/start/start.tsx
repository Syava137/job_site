import { FC } from 'react'
import Image from 'next/image'

const Start:FC = () => {

    return (
        <section style={{textAlign: 'start'}}>
            Здесь должен быть текст 
            <Image
                style={{color: 'black'}}
                src=''
                width={500}
                height={500}
                alt='БОЛШАЯ КАРТИНКА'
            ></Image>
        </section>
    )
}

export default Start