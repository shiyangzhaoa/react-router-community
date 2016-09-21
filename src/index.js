import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
// 引入Antd的导航组件
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu

import 'antd/dist/antd.css';

import { DatePicker } from 'antd';

import './styles/main.css'
import Main from 'components/Main'
import RegisterForm from 'components/form'
import Calendar from 'components/calendar'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '',
            username: ''
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        this.setState({
            username: 'shiyangzhaoa'
        })
    }

    render() {
        return (
            <div>
                <div id="leftMenu">
                    <img src='./images/yeoman.png' width="50" id="logo"/>
                    <Menu theme="dark"
                        onClick={this.handleClick}
                        style={{ width: 185 }}
                        defaultOpenKeys={['sub1', 'sub2']}
                        defaultSelectedKeys={[this.state.current]}
                        mode="inline"
                    >
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>兴趣</span></span>}>
                            <Menu.Item key="1"><Link to="/Register">注册</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/Calendar">日历</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>规划</span></span>}>
                            <Menu.Item key="5"><Link to="/myCard">导航</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/myAnimate">关注</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div id="rightWrap">
                    <Menu mode="horizontal">
                        <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
                            <Menu.Item key="setting:1">退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                    <div className="right-box">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute path="Home" component={Main}/>
            <Route path="Register" component={RegisterForm}></Route>
            <Route path="Calendar" component={Calendar}></Route>
        </Route>
    </Router>
), document.getElementById('app'))