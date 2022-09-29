import style from './index.module.css'
export const Lista = ({teamList, value, onChange})=>{
    function handleChange(event){
        onChange(event.target.value)
    }
    return (
        <select className={style.lista} onChange={handleChange}>
            {teamList.map((team)=>(
                <option key={team.title}>{team.title}</option>
            ))}
        </select>
    )
}