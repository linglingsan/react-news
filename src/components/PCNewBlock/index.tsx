import React from 'react';
import {Card} from 'antd';


interface blockParams {
    news: []
}

interface Props  {
    type: string,
    count: number,
    width: string,
    bordered: boolean
}

class PCNewsBlock extends React.Component<Props, {}> {
    state: blockParams = {
        news: []
    };

    componentWillMount() {
        this.getNewsList();
    };

    getNewsList = () => {
        const myFetchOptions = {
            method: 'GET'
        };

        const {type, count} = this.props;
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));

    }

    render(): React.ReactNode {
        const {news} = this.state;
        const newsList = news.length
            ? news.map((newsItem:any, index) => (
                <li key={index}>{newsItem.title}</li>
            ))
            : '没有加载到任何新闻';
        return (
            <div className="topNewsList">
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        );
    };
}

export default PCNewsBlock;
