import React from 'react';
import '../css/Main/Main.css';
import Sidebar from './Sidebar';
import Box3 from './Box-3';
import Box2 from './Box-2';
// import Add from 'https://smartlanding.biz/demo/fileinput/img/add.svg';

const Main: React.FC = () => {
    return (
        <div>
            <main className="page__main">
                <Sidebar />
                <section className="main__content" >
                    <Box3 />
                    <Box2 />
                </section>
            </main>
        </div>
    )
}

export default Main