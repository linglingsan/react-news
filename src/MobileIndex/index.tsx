import React from 'react';
import MobileHeader from "../components/MobileHeader";
import MobileFooter from "../components/MobileFooter";

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
