import { Employee } from './Employee'
import style from './index.module.css'
export const Team = ({team, employeeList})=>{
    console.log(team)
    return (
        employeeList.length>0 && <section key={team.title} className={style.team} style={{backgroundColor:team.secundaryColor}}>
        <h3 className={style.title} 
            style={{borderBottomColor:team.primaryColor}}>
            {team.title}
        </h3>
        
        <div className={style.employee}>
            {employeeList.map((employee)=>(
                <Employee 
                    key={employee.name} 
                    color={team.primaryColor} 
                    name={employee.name} 
                    job={employee.job} 
                    image={employee.image}
                />
            ))}
        </div>
            
        </section>
    )
}