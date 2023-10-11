import React, { ReactElement } from 'react'
import './Botao.css'

interface BotaoProps {
  children: ReactElement | string
}

const Botao = (props: BotaoProps) => {
  return (
    <button className='botao' type='submit'>
        {props.children}
    </button>
  )
}

export default Botao