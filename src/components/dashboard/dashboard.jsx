import { Header } from '../shared/header/header';
import { Loader } from '../shared/loader/loader';
import { Menu } from '../widgets/menu/menu';
import './dashboard.css';

export function Dashboard() {
    return(
        <>
            <Header />


            {/* <Loader /> */}

            <div className='content'>
                <Menu />
                Hola Dashboard
            </div>
        </>
    )
}