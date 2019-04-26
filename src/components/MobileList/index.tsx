import React from 'react';
import {Row, Col} from 'antd';

interface listParams {
    news: []
}

interface Props {
    type: string
    count: number
}

interface newsParams {
    thumbnail_pic_s: string
    title: string
    realtype: string
    date: string
}

class MobileList extends React.Component<Props, {}> {
    state: listParams = {
        news: []
    };

    componentWillMount() {
        this.getList()
    }

    getList = () => {
        const {type, count} = this.props;
        var myFetchOptions = {
            method: 'GET'
        };
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`, myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({news: json}));

    }

    render(): React.ReactNode {
        const {news} = this.state;
        const newsList = news.length
            ? news.map((newsItem:newsParams, index) => (
                <section key={index} className="m_article list-item special_section clearfix">
                    <div className="m_article_img">
                        <img src={newsItem.thumbnail_pic_s} alt={newsItem.title}/>
                    </div>
                    <div className="m_article_info">
                        <div className="m_article_title">
                            <span>{newsItem.title}</span>
                        </div>
                        <div className="m_article_desc clearfix">
                            <div className="m_article_desc_l">
                                <span className="m_article_channel">{newsItem.realtype}</span>
                                <span className="m_article_time">{newsItem.date}</span>
                            </div>
                        </div>
                    </div>

                </section>
            ))
            : '没有加载到任何新闻';
        return (
            <div>
                <Row>
                    <Col span={24}>
                        {newsList}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MobileList;
