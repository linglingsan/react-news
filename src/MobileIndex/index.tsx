import React from 'react';
import MobileHeader from "../MobileHeader";
import MobileFooter from "../MobileFooter";

class MobileIndex extends React.Component{
    render(): React.ReactNode {
        return (
            <div>
                <MobileHeader/>
                <MobileFooter/>
            </div>
        );
    }
}
export default MobileIndex;
