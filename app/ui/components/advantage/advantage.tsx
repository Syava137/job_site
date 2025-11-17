import { FC } from 'react'

interface Props {
    url: string
    text: string
}

const Advantage:FC<Props> = ({ url, text }) => {

    return (
        <div>
            <img src={url} alt="Наши преимущества" />
            { text }
        </div>
    )
}

export default Advantage