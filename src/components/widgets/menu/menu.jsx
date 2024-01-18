import './menu.css';

export function Menu() {
    return(
        <>
            <div className='menu'>
                <div className='content_menu'>

                    <div className='option_menu'>Admin</div>
                    <div className='option_menu'>Notificaciones</div>
                    <div className='option_menu'>Configuración</div>

                </div>
                {/* <span className='button_arrow'>
                    <i className="fa-solid fa-arrow-right"></i>
                </span> */}
            </div>
        </>
    )
}