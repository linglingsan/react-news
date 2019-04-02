import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import PCIndex from './PCIndex';
import MobileIndex from './MobileIndex';

class Root extends Component {
    render() {
        return (
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <PCIndex/>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <MobileIndex/>
                </MediaQuery>
            </div>
        );
    }
}

export default Root;
