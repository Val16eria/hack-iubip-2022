import React from 'react';
import '../css/Convert/Convert.css';
import Add from "../Image/add.svg";
import Sidebar from '../Main/Sidebar';
import Box2 from '../Main/Box-2';
import Box3 from '../Main/Box-3';

const Convert: React.FC = () => {
    return (
        <div className="page__main">
            <Sidebar />
            <div className='main__content'>
                <div className="convert-frx">
                    <svg width="186" viewBox="0 0 194 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M98 4L4 60V168.5L98 220.5M98 220.5V116L190 60M98 220.5L190 168.5V60M190 60L142 30.5L51 85.5V145" stroke="#444444" stroke-width="7" />
                    </svg>
                    <p>Конвертирование файла формата FRX в требуемый формат</p>
                    <div className="input__wrapper">
                        <input name="file" type="file" id="input__file" className="input input__file" multiple />
                        <label htmlFor="input__file" className="input__file-button">
                            <span className="input__file-icon-wrapper">
                                <img className="input__file-icon" src={Add} alt="Выбрать файл" width="25" />
                            </span>
                            <span className="input__file-button-text">Выберите файл</span>
                        </label>
                    </div>
                </div>
                <Box2 />
                <Box3 />
            </div>
        </div>
    )
}

export default Convert