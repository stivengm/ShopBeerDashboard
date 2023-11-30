import './login.css';

export function Login() {

    return(
        <div className='div_login'>
            Login
            <form>
                <input type="text" placeholder="Usuario" />
                <input type="text" placeholder="Contraseña" />
            </form>
        </div>
    );

}