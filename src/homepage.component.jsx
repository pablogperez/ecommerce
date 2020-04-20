import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>BURGERS</h1>
                    <span className='subtitle'>SHOP NOW BITCH</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>SALADS</h1>
                    <span className='subtitle'>SHOP NOW BITCH</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>DRINKS</h1>
                    <span className='subtitle'>SHOP NOW BITCH</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>BEERS</h1>
                    <span className='subtitle'>SHOP NOW BITCH</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>DESSERTS</h1>
                    <span className='subtitle'>SHOP NOW BITCH</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;