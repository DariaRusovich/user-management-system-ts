import { FC } from 'react';
import '../styles/Loader.css'

const Loader:FC = () => {
    return (
        <div className="container loader-wrap"> 
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loader;