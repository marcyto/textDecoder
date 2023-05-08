import logoAlura from '../../assets/logo_alura.png';
import './header.css';

export default function Header(){
    return(
        <div className='header'>
            <img src={logoAlura}/>
        </div>
    )
}