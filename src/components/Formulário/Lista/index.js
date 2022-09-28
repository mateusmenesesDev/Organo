import style from './index.module.css'
export const Lista = ({teamList})=>{
    return (
        <select className={style.lista}>
            {teamList.map((team)=>(
                <option key={team.title}>{team.title}</option>
            ))}
        </select>
    )
}