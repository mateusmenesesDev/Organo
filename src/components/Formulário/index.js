import style from './index.module.css'
import { Input } from './Input'
import { Lista } from './Lista'

export const Formulario = ({teamList})=>{
    return (
        <form className={style.formDiv}>
            <h3>Preencha os dados para criar o card do colaborador.</h3>
            <Input title='Nome' placeholder='Digite seu Nome'/>
            <Input title='Cargo' placeholder='Digite seu Cargo'/>
            <Input title='Imagem' placeholder='Digite o endereço da sua imagem'/>
            <Lista teamList = {teamList}/>
            
        </form>
    )
}