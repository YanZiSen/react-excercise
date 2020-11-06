import {Menu, Layout} from 'antd'
import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {NavConfigList} from '../../routers'
import {connect} from 'react-redux'
const {Sider} = Layout 
// @connect (
//     state => state.user
// )
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
        return (
            <Sider width={200} onCollapse={() => this.setCollapsed()} collapsible collapsed={this.state.collapsed}>
                <Menu theme='dark'>
                    {NavConfigList.filter(nav => !nav.permission || nav.permission.indexOf(this.props.user.role) > -1).map(nav => {
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

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default withRouter(connect(mapStateToProps)(SliderMenu))
