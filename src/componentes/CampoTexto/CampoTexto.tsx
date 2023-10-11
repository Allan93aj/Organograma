import React from 'react'
import './CampoTexto.css'

interface CampoTextoProps {
  aoAlterado: (valor: string) => void
  placeholder: string
  label: string
  valor:string
  obrigatorio?: boolean
}

const CampoTexto = ({aoAlterado, label, placeholder, valor, obrigatorio = false}: CampoTextoProps) => {


  const aoDigitado = (e: { target: { value: string } }) => {
    aoAlterado(e.target.value)
  }

  return (
    <div className='campo-texto'>
        <label>{label}</label>
        <input 
            value={valor} 
            onChange={aoDigitado} 
            required={obrigatorio} 
            placeholder={placeholder}
        />
    </div>
  )
}

export default CampoTexto