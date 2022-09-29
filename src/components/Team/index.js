import { Employee } from './Employee'
import style from './index.module.css'
export const Team = ({teamList})=>{
    return (
        <>
            <h3>Minha Organização:</h3>
            {teamList.map((team)=>(
                <section key={team.title} className={style.team} style={{backgroundColor:team.secundaryColor}}>
                <h3 className={style.title} style={{borderBottomColor:team.primaryColor}}>
                    {team.title}
                </h3>
                <div className={style.employee}>
                    <Employee color={team.primaryColor}/>
                    <Employee color={team.primaryColor}/>
                </div>
                    
                </section>
            ))}
            
        </>
    )
}