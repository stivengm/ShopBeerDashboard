import { Header } from '../shared/header/header';
import { Loader } from '../shared/loader/loader';
import { Menu } from '../widgets/menu/menu';
import './dashboard.css';

import { Notifications } from '../notifications/notifications';

export function Dashboard() {
    return(
        <>
            <Header />


            {/* <Loader /> */}

            <div className='content'>
                <Menu />
                <Notifications />
            </div>
        </>
    )
}