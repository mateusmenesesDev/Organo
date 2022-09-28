import style from './index.module.css'

export const Input = ({title, placeholder})=>{
    return(
        <div>
            <label className={style.labelStyle}>
            {title}
            <input type='text' placeholder={placeholder}></input>
            </label>
        </div>  
        
    )
    
}