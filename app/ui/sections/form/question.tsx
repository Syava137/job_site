import { FC, useId } from 'react'

interface Props {
    title: string
    values: string[] | null
}

const Question:FC<Props> = ({ title, values }) => {

    const id = useId()

    return (
        <>
            <label htmlFor={id}>{ title }</label>
            {values ?             
                <select id={id} style={{marginTop: '5px', marginBottom: '30px', width: '50%', borderRadius: '10px', padding: '10px'}}>
                    {values?.map((v, i)=>(
                        <option value={v} key={i}>{v}</option>
                    ))}
                </select> 
            : 
                <input type="number" id={id} style={{marginTop: '5px', marginBottom: '30px', width: '50%', borderRadius: '10px', padding: '10px'}}/>
            }
        </>
    )
}

export default Question