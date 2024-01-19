import { useState, useEffect } from 'react'
import axios from 'axios';

import { Header } from '../shared/header/header';
import { Loader } from '../shared/loader/loader';
import { Menu } from '../widgets/menu/menu';
import './notifications.css';

export function Notifications() {
    const [config, setConfig] = useState(null);

    const [loader, setLoader] = useState(true);


    useEffect(() => {
        getNotificaions();
    }, []);

    async function getNotificaions() {
        const config = await getConfigSessionStorage();
        const conf = JSON.parse(config);
        console.log(conf.api);
        axios.get(`${conf.api}/api/v1/config/notifications`).then((response) => {
            setConfig(response.data);
            setTimeout(() => {
                setLoader(false);
            }, 8000);
        });
    }

    
    function getConfigSessionStorage() {
        var config = window.sessionStorage.getItem('config');
        return config;
    }

    // getNotificaions();

    return(
        <>
        {
            !loader ?

            <div className='content_notifications'>
                <h1>Notificaciones</h1>
                <div className='notifications'>

                    <div className='item_notifications'>

                    </div>
                </div>
            </div> :
            <Loader />
        }
        </>
    )
}