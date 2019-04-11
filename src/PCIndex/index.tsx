import React from 'react';
import PCHeader from '../components/PCHeader';
import PCFooter from '../components/PCFooter';
import PCNewsContainer from '../components/PCNewscontainer';

class PCIndex extends React.Component{
    render(): React.ReactNode {
        return (
            <div>
                <PCHeader/>
                <PCNewsContainer/>
                <PCFooter/>
            </div>
        );
    }
}
export default PCIndex;
