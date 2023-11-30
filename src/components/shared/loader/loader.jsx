import loader from '../../../assets/loader.gif';
import './loader.css';

export function Loader() {
    return(
        <div className="loader">
            <img src={loader} alt="" />
        </div>
    );
}