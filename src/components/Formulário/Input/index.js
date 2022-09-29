import style from './index.module.css'

export const Input = ({title, placeholder, value, onChange, required})=>{
    function handleChange(event){
        onChange(event.target.value)
    }
    return(
        <div>
            <label className={style.labelStyle}>
            {title}
            <input onChange={handleChange} value={value} type='text' placeholder={placeholder} required={required}></input>
            </label>
        </div>  
        
    )
    
}