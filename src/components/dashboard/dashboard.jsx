import { Header } from '../shared/header/header';
import { Menu } from '../widgets/menu/menu';

export function Dashboard() {
    return(
        <>
            <Header />


            <div className='content'>
                <Menu />
                Hola Dashboard
            </div>
        </>
    )
}