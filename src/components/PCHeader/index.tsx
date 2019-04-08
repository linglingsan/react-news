import React from 'react';
import {Col, Icon, Menu, message, Modal, Row} from 'antd';
import './index.css';
import Register from '../Register';

interface HearderParams {
    current: string,
    registerVisible: boolean,
    userNickName: string,
    userid: number
}
interface rParams {
    r_userName: string,
    r_password: string,
    r_confirmPassword: string
}

class PCHeader extends React.Component {
    state: HearderParams = {
        current: 'top',
        registerVisible: false,
        userNickName: '',
        userid: 0
    }
    form: any = {}
    /***
     * 显示弹框
     * @param key  键
     * @param value 值
     */
    setModalVisible = (obj: object) => {
        this.setState(obj);
    };
    /***
     * 导航栏切换 点击事件
     * @param e
     */
    handleClick = (e: any) => {
        if (e.key === 'register') {
            this.setState({current: 'register'});
            this.setModalVisible({'registerVisible': true});
        } else {
            this.setState({current: e.key})
        }
    }
    /***
     * 确认弹框
     */
    reigisterConfirm = () => {
        const params: rParams = this.form.handleSubmit();
        if (!params) return;
        const myFetchOptions: object = {
            method: 'GET'
        };
        const {r_userName, r_password, r_confirmPassword} = params;
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=register&r_userName=${r_userName}&r_password=${r_password}&r_confirmPassword=${r_confirmPassword}`, myFetchOptions)
            .then(response => response.json()).then(json => {
            this.setState({userNickName: json.NickUserName, userid: json.UserId});
            this.setModalVisible({'registerVisible': false});
            message.success("请求成功！");
        });

    }
    /***
     * 取消弹框
     */
    cancelHandle = () => {
        this.setModalVisible({'registerVisible': false});
    }

    render(): React.ReactNode {
        const {current, registerVisible} = this.state;

        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src={'/images/logo.png'} alt=""/>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="top">
                                <Icon type="appstore"/>头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore"/>社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="appstore"/>国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="appstore"/>国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore"/>娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore"/>体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="appstore"/>科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="appstore"/>时尚
                            </Menu.Item>
                            <Menu.Item key="register" className="register">
                                <Icon type="appstore"/>注册/登录
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
                <Modal
                    title="登录/注册"
                    visible={registerVisible}
                    onOk={this.reigisterConfirm}
                    onCancel={() => this.cancelHandle}
                >
                    <Register wrappedComponentRef={(form: object) => {
                        this.form = form
                    }}/>
                </Modal>
            </header>
        );
    }
}

export default PCHeader;
