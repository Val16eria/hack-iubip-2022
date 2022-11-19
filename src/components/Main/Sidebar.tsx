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
                <button className="sidebar__button sidebar__button5">
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M44.5577 27.199L38.1542 17.3034C37.6566 16.5387 36.8182 16.078 35.906 16.078H33.0774C32.6628 16.078 32.414 16.5387 32.6443 16.8796L39.5547 27.5676C39.6468 27.7058 39.5455 27.8901 39.3796 27.8901H36.3483H33.879H31.5111C31.2254 27.8901 31.0043 28.1204 30.9859 28.3968C30.7187 32.8563 27.024 36.3944 22.4908 36.3944C17.9576 36.3944 14.2629 32.8563 13.9957 28.3968C13.9773 28.1112 13.7561 27.8901 13.4705 27.8901H11.1026H8.98341H5.61118C5.44533 27.8901 5.35319 27.7058 5.43612 27.5676L12.3464 16.8796C12.5676 16.5295 12.3188 16.078 11.9134 16.078H9.08477C8.1726 16.078 7.33415 16.5387 6.83661 17.3034L0.44226 27.199C0.156634 27.6413 0 28.1665 0 28.7009V42.4847C0 43.8299 1.09644 44.9263 2.44165 44.9263H22.5H42.5584C43.9036 44.9263 45 43.8299 45 42.4847V28.7009C45 28.1665 44.8526 27.6505 44.5577 27.199Z"
                            fill="#1E7BB9" />
                        <path
                            d="M23.2371 0.433052C22.8593 -0.0460637 22.1314 -0.0460637 21.7537 0.433052L15.6818 8.15418C15.1935 8.7715 15.6357 9.68367 16.4189 9.68367H18.8145V24.269C18.8145 26.3053 20.4638 27.9546 22.5 27.9546C24.5362 27.9546 26.1855 26.3053 26.1855 24.269V9.67445H28.5811C29.3643 9.67445 29.8065 8.76229 29.3182 8.14497L23.2371 0.433052Z"
                            fill="#1E7BB9" />
                    </svg>
                    Загрузка документа по изображению
                </button>
            </aside>
        </div>
    )
}

export default Sidebar