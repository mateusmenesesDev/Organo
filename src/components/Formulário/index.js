import { useState } from 'react'
import { Button } from '../Button'
import style from './index.module.css'
import { Input } from './Input'
import { Lista } from './Lista'

export const Formulario = ({teamList, addSubmit})=>{
    const[name, setName] = useState('')
    const[job, setJob] = useState('')
    const[image, setImage] = useState('')
    const[team, setTeam] = useState('Programação')
    const handleSubmit = (event)=>{
        event.preventDefault()
        
        // console.log(name, job, image, team)
        addSubmit({name, job, image, team})
    }
    return (
        <form className={style.formDiv} onSubmit={handleSubmit}>
            <h3>Preencha os dados para criar o card do colaborador.</h3>
            <Input title='Nome' placeholder='Digite seu Nome' value={name} onChange={setName} />
            <Input title='Cargo' placeholder='Digite seu Cargo' value={job} onChange={setJob}/>
            <Input title='Imagem' placeholder='Digite o endereço da sua imagem' value={image} onChange={setImage}/>
            <Lista teamList = {teamList} value={team} onChange={setTeam}/>
            <Button >Criar Card</Button>
        </form>
    )
}