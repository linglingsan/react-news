import React from 'react';
import {Card} from 'antd';

interface blockParams {
    news: []
}

interface Props {
    type: string,
    count: number,
    imageWidth: string,
    cartTitle: string,
    width: string
}

class PCNewsImageBlock extends React.Component<Props, {}> {
    state: blockParams = {
        news: []
    };

    componentWillMount(): void {
        this.getBlockData();
    }

    getBlockData = () => {
        const myFetchOptions = {method: 'GET'};
        const {type, count} = this.props;
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`, myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({news: json}));

    }

    render() {
        const styleImage = {
            display: 'block',
            width: this.props.imageWidth,
            height: '90px'
        };
        const styeH3 = {
            width: this.props.imageWidth,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        };
        const {news} = this.state;
        const newsList = news.length
            ? news.map((newsItem:any, index) => (
                <div key={index} className="imageblock">
                        <div className="custom-image">
                            <img alt="" style={styleImage} src={newsItem.thumbnail_pic_s}/>
                        </div>

                        <div className="custom-card">
                            {/*<h3 style={styeH3}>{newsItem.title}</h3>*/}
                            <p>{newsItem.author_name}</p>
                        </div>
                </div>
            ))
            : '没有加载到任何新闻';
        return (
            <div className="topNewsList">
                <Card title={this.props.cartTitle} bordered={true} style={{
                    width: this.props.width
                }}>
                    {newsList}
                </Card>
            </div>
        );
    }
}

export default PCNewsImageBlock;
