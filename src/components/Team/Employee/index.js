import style from './index.module.css'
export const Employee = ({name, job, image})=>{
    return (
    <div className={style.employee}> 
        <div className={style.header}>
            <img src={image} alt=''/>
        </div>
        <div className={style.footer}>
            <h4>{name}</h4>
            <h5>{job}</h5>
        </div>
    </div>
    )
}