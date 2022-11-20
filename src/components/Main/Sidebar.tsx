import React, { useEffect } from 'react';
import '../css/Main/Sidebar.css';

const Sidebar: React.FC = () => {
    const last = () => {
        // Кнопочки
        let btnDecl = document.querySelector('.btn-decl');
        let subBtn = document.querySelector('.sub-button1');
        let subBtn2 = document.querySelector('.sub-button2');
        let ndfl3 = document.querySelector('.ndfl-box-3');
        let ndfl2 = document.querySelector('.ndfl-box-2');
        let convert = document.querySelector('.convert-frx');
        let convertBtn = document.querySelector('.convert--button');
        let sidebarBtn1 = document.querySelector('.sidebar__button1');
        let sidebarBtn2 = document.querySelector('.sidebar__button2');
        let sidebarBtn3 = document.querySelector('.sidebar__button3');
        let sidebarBtn4 = document.querySelector('.sidebar__button4');
        let sidebarBtn5 = document.querySelector('.sidebar__button5');

        btnDecl?.addEventListener('click', function () {
            subBtn?.classList.toggle('sub-button');
            subBtn2?.classList.toggle('sub-button');
        })

        // Мэйн


        subBtn?.addEventListener('click', function () {
            convert?.classList.add('convert-frx--close');
            ndfl2?.classList.add('ndfl-closed');
            ndfl3?.classList.remove('ndfl-closed');
        })

        convertBtn?.addEventListener('click', function () {
            ndfl2?.classList.add('ndfl-closed');
            ndfl3?.classList.add('ndfl-closed');
            convert?.classList.remove('convert-frx--close');
        })

        subBtn2?.addEventListener('click', function () {
            convert?.classList.add('convert-frx--close');
            ndfl3?.classList.add('ndfl-closed');
            ndfl2?.classList.remove('ndfl-closed');
        })

        sidebarBtn1?.addEventListener('click', function () {
            sidebarBtn1?.classList.add('active-button');
            sidebarBtn2?.classList.remove('active-button');
            sidebarBtn3?.classList.remove('active-button');
            sidebarBtn4?.classList.remove('active-button');
            sidebarBtn5?.classList.remove('active-button');
        })

        sidebarBtn2?.addEventListener('click', function () {
            sidebarBtn2?.classList.add('active-button');
            sidebarBtn1?.classList.remove('active-button');
            sidebarBtn3?.classList.remove('active-button');
            sidebarBtn4?.classList.remove('active-button');
            sidebarBtn5?.classList.remove('active-button');
        })

        sidebarBtn3?.addEventListener('click', function () {
            sidebarBtn3?.classList.add('active-button');
            sidebarBtn2?.classList.remove('active-button');
            sidebarBtn1?.classList.remove('active-button');
            sidebarBtn4?.classList.remove('active-button');
            sidebarBtn5?.classList.remove('active-button');
        })

        sidebarBtn4?.addEventListener('click', function () {
            sidebarBtn4?.classList.add('active-button');
            sidebarBtn2?.classList.remove('active-button');
            sidebarBtn3?.classList.remove('active-button');
            sidebarBtn1?.classList.remove('active-button');
            sidebarBtn5?.classList.remove('active-button');
        })

        sidebarBtn5?.addEventListener('click', function () {
            sidebarBtn5?.classList.add('active-button');
            sidebarBtn2?.classList.remove('active-button');
            sidebarBtn3?.classList.remove('active-button');
            sidebarBtn4?.classList.remove('active-button');
            sidebarBtn1?.classList.remove('active-button');
        })
    };

    useEffect(() => {
        return last();
    }, []);



    return (
        <div>
            <aside className="sidebar">
                <button className="sidebar__button sidebar__button1 convert--button">
                    <svg width="38" height="49" viewBox="0 0 38 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M37.4433 12.8022L25.0933 0.552192C24.7361 0.197885 24.2535 0 23.75 0H3.8C1.7005 0 0 1.68673 0 3.76923V45.2308C0 47.3133 1.7005 49 3.8 49H34.2C36.2995 49 38 47.3133 38 45.2308V14.1346C38 13.6352 37.8005 13.1565 37.4433 12.8022ZM24.7 15.0769C23.6512 15.0769 22.8 14.2326 22.8 13.1923V3.58831L34.3824 15.0769H24.7Z"
                            fill="#1E7BB9" />
                    </svg>
                    Конвертировать FRX
                </button>
                <button className="sidebar__button sidebar__button2 btn-decl">
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 44.9998L12.1377 43.7439L1.25652 32.8623L0 44.9998Z" fill="#1E7BB9" />
                        <path
                            d="M27.0036 7.11549L37.8847 17.9966L14.2297 41.6516L3.34839 30.7704L27.0036 7.11549ZM43.5058 12.3754C45.4977 10.3835 45.4985 7.15394 43.5058 5.16147L39.8383 1.49399C37.8465 -0.498273 34.6165 -0.497864 32.6244 1.49399L29.0764 5.04222L39.958 15.9232L43.5058 12.3754Z"
                            fill="#1E7BB9" />
                    </svg>
                    Заполнить декларацию
                </button>
                <button className="sidebar__button sidebar__button3 sub-button sub-button1">
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 44.9998L12.1377 43.7439L1.25652 32.8623L0 44.9998Z" fill="#1E7BB9" />
                        <path
                            d="M27.0036 7.11549L37.8847 17.9966L14.2297 41.6516L3.34839 30.7704L27.0036 7.11549ZM43.5058 12.3754C45.4977 10.3835 45.4985 7.15394 43.5058 5.16147L39.8383 1.49399C37.8465 -0.498273 34.6165 -0.497864 32.6244 1.49399L29.0764 5.04222L39.958 15.9232L43.5058 12.3754Z"
                            fill="#1E7BB9" />
                    </svg>
                    3-НДФЛ
                </button>
                <button className="sidebar__button sidebar__button4 sub-button sub-button2">
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 44.9998L12.1377 43.7439L1.25652 32.8623L0 44.9998Z" fill="#1E7BB9" />
                        <path
                            d="M27.0036 7.11549L37.8847 17.9966L14.2297 41.6516L3.34839 30.7704L27.0036 7.11549ZM43.5058 12.3754C45.4977 10.3835 45.4985 7.15394 43.5058 5.16147L39.8383 1.49399C37.8465 -0.498273 34.6165 -0.497864 32.6244 1.49399L29.0764 5.04222L39.958 15.9232L43.5058 12.3754Z"
                            fill="#1E7BB9" />
                    </svg>
                    2-НДФЛ
                </button>
                
            </aside>
        </div>
    )
}

export default Sidebar