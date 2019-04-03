import React from 'react';
import './index.css';
class MobileHeader extends React.Component{
    render(): React.ReactNode {
        return (
            <div id="mobileheader">
                <header>
                    <img src={'images/logo.png'} alt=""/>
                    <span>ReactNews</span>
                </header>
            </div>
        );
    }
}
export default MobileHeader;
