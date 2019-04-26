import React from 'react';
import {Row, Col} from 'antd';

interface listParams {
    news: string
}

interface Props {
    type: string,
    count: number,
    width: string,
    bordered: boolean
}

class MobileList extends React.Component<Props, {}> {
    state: listParams = {
        news: ''
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
        return (
            <div></div>
        );
    }
}

export default MobileList;
