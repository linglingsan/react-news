import React from 'react';
import {Col, Row} from "antd";

class MobileFooter extends React.Component{
    render(): React.ReactNode {
        return (
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="footer">
                        &copy;&nbsp;2019 ReactNews. All Rights Reserved.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        );
    }
}
export default MobileFooter;
