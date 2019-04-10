import React from 'react';
import {Card, Carousel, Col, Row} from 'antd';
import './index.css';
import PCNewsBlock from  '../PCNewBlock';

class PCNewsContainer extends React.Component {
    render(): React.ReactNode {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="carousel">
                            <Carousel {...settings}>
                                <div><img src="images/carousel_1.jpg"/></div>
                                <div><img src="images/carousel_2.jpg"/></div>
                                <div><img src="images/carousel_3.jpg"/></div>
                                <div><img src="images/carousel_4.jpg"/></div>
                            </Carousel>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}
export default PCNewsContainer;
