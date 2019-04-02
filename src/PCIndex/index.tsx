import React from 'react';
import PCHeader from '../PCHeader';
import PCFooter from '../PCFooter';

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
