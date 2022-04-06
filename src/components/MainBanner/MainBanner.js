import React from 'react';
import Welcomelogo from '../../images/welcomelogo.png'
import './MainBanner.css'

const MainBanner = () => {
    return (
        <div>
            <div className="container mt-5 pt-5">
                <div className="col-md-5">
                    <div className="des-area">
                        <div className="welcome d-flex">
                            <img className='' src={Welcomelogo} alt="" />
                            <p>Welcome to Stella</p>
                        </div>

                    </div>
                </div>
                <div className="col-mf">

                </div>
            </div>
        </div>
    );
};

export default MainBanner;