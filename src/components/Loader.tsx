import { FC } from 'react';
import '../styles/Loader.scss'

const Loader:FC = () => {
    return (
        <div className="container loader-wrap"> 
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loader;