import React, { useState } from 'react'
import CampoTexto from '../CampoTexto/CampoTexto'
import './Formulario.css'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao/Botao'
import { IColaborador } from '../../compartilhado/interfaces/IColaborador'

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void
  times: string[]
  
}


const Formulario = (props: FormularioProps) => {

  const [nome, setNome] = useState("")
  const [cargo, setCargo] = useState("")
  const [imagem, setImagem] = useState("")
  const [time, setTime] = useState("")
  const [data, setData] = useState("")

  const aoSalvar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
      data 
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
    setData('')

  }
  
  return (
    <section className='formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            
            {/* CAMPO NOME */}
            <CampoTexto 
              obrigatorio={true} 
              label="Nome" 
              placeholder="Digite seu nome"
              valor={nome}
              aoAlterado={valor => setNome(valor)}
            />

            {/* CAMPO CARGO */}
            <CampoTexto 
              obrigatorio={true} 
              label="Cargo" 
              placeholder="Digite seu cargo"
              valor={cargo}
              aoAlterado={valor => setCargo(valor)}
            />

            {/* CAMPO IMAGEM */}
            <CampoTexto 
              label="Imagem" 
              placeholder="Digite o endereço da imagem"
              valor={imagem}
              aoAlterado={valor => setImagem(valor)} 
            />

             {/* CAMPO DE DATA */}
             <CampoTexto 
              label="Data de entrada no time" 
              placeholder=""
              valor={data}
              aoAlterado={valor => setData(valor)} 
              tipo="date"
            />

            {/* CAMPO TIME */}
            <ListaSuspensa 
              obrigatorio={true} 
              label="Time" 
              itens={props.times}
              valor={time}
              aoAlterado={valor => setTime(valor)} 
            />

            {/* BOTÃO DE CRIAR CARD */}
            <Botao>Ciar Card</Botao>
        </form>
    </section>
  )
}

export default Formulario