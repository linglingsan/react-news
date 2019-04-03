import React from 'react';
import PCHeader from '../components/PCHeader';
import PCFooter from '../components/PCFooter';

class PCIndex extends React.Component{
    render(): React.ReactNode {
        return (
            <div>
                <PCHeader/>
                <PCFooter/>
            </div>
        );
    }
}
export default PCIndex;
