import React from 'react';
import {Icon, message, Modal} from 'antd';
import Register from '../Register';

interface HearderParams {
    registerVisible: boolean,
    userNickName: string,
    userid: number
}
interface rParams {
    r_userName: string,
    r_password: string,
    r_confirmPassword: string
}
class MobileHeader extends React.Component {
    state: HearderParams = {
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
    handleClick = () => {
        this.setModalVisible({'registerVisible': true});

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
            this.form.resetValue();
            this.setModalVisible({'registerVisible': false});
            message.success("请求成功！");
        });

    }
    /***
     * 取消弹框
     */
    cancelHandle = () => {
        this.form.resetValue();
        this.setModalVisible({'registerVisible': false});
    }
    render(): React.ReactNode {
        const {registerVisible} = this.state;
        return (
            <div id="mobileheader">
                <header>
                    <img src={'images/logo.png'} alt=""/>
                    <span>ReactNews</span>
                    <Icon type="setting" onClick={this.handleClick}/>
                    <Modal
                        title="登录/注册"
                        visible={registerVisible}
                        okText="注册"
                        cancelText="取消"
                        onOk={this.reigisterConfirm}
                        onCancel={this.cancelHandle}
                    >
                        <Register wrappedComponentRef={(form: object) => {
                            this.form = form
                        }}/>
                    </Modal>
                </header>
            </div>
        );
    }
}

export default MobileHeader;
