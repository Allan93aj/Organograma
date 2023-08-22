import React from 'react'
import './Time.css'
import Colaborador from '../Colabrador/Colaborador'

const Time = (props) => {

  const css = { backgroundColor: props.corSecundaria}
  const card = {borderColor: props.corPrimaria}

  return (

    ( props.colaboradores.length > 0 ) ? <section className='time' style={css}>
        <h3 style={card}>{props.nome}</h3>
        <div className='colaboradores'>
        {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria}
          key={colaborador.nome}
          nome={colaborador.nome} 
          cargo={colaborador.cargo}
          imagem={colaborador.imagem}
          />)}
        </div>
    </section>
    : ''
  )
}

export default Time