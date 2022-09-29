import style from './index.module.css'
export const Employee = ()=>{
    return (
    <div className={style.employee}> 
        <div className={style.header}>
            <img src='https://github.com/viniciosneves.png' alt=''/>
        </div>
        <div className={style.footer}>
            <h4>Vinicios Neves</h4>
            <h5>Instrutor</h5>
        </div>
    </div>
    )
}