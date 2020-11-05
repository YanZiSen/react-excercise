import {Menu, Layout} from 'antd'
import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {NavConfigList} from '../../routers'
const {Sider} = Layout 
class SliderMenu extends React.Component {
    state = {
        collapsed: false 
    }
    setCollapsed () {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    render () {
        console.log(this.props)
        return (
            <Sider width={200} onCollapse={() => this.setCollapsed()} collapsible collapsed={this.state.collapsed}>
                <Menu theme='dark'>
                    {NavConfigList.map(nav => {
                        return (
                            <Menu.Item key={nav.name}>
                                <NavLink to={nav.path}>{nav.name}</NavLink>
                            </Menu.Item>
                        )
                    })}
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(SliderMenu)
