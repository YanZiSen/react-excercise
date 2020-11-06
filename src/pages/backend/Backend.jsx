import {Layout} from 'antd'
import React from 'react'
import SliderMenu from './SliderMenu'
import {connect} from 'react-redux'
import store from '../../store'

import {renderRoutes, SecondRoutes} from '../../routers'
const {Header, Content, Footer} = Layout
const Index = ({user}) => {
    let {userName = '暂无'} = user
    return (
        <Layout>
            <Header style={{height:"48px",lineHeight:'48px', color: '#fff'}}>
                XXXX系统-有道云课堂-{userName}
            </Header>
            <Layout>
                <SliderMenu></SliderMenu>
                <Layout>
                    <Content style={{height:'calc(100vh - 96px)'}}>
                        {renderRoutes(SecondRoutes, user.role)}
                    </Content>
                    <Footer style={{height:'48px', padding: '0 20px', borderTop: '1px solid #ddd', lineHeight: '48px'}}>
                        ...XXXX出品
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    )
}

const mapStateToProps = (state) => {
    return {
        user:state.user
    }
}

export default connect(mapStateToProps)(Index)