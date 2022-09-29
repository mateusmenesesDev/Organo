import style from './index.module.css'

export const Footer = ()=>{
    return (
        <footer className={style.footer}>
            <div className={style.items}>
                <div className={style.social}>
                    <a href='' target='_blank'>
                        <img src='./image/fb.png' alt='Facebook Logo'></img>
                    </a>
                    <a href='https://www.instagram.com/mateus.meneses.3/?igshid=5i3liw4gsp3r' target='_blank'>
                        <img src='./image/ig.png' alt='Instagram Logo'></img>
                    </a>
                </div>
                <img src='./image/logo.png' alt='Organo logo'></img>
                <h4>Desenvolvido por <a href='https://github.com/mattzteugithub' target='_blank'>@mattzteugithub</a></h4>
            </div>
            
        </footer>
    )
}