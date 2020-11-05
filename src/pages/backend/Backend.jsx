import {Layout} from 'antd'
import React from 'react'
import SliderMenu from './SliderMenu'
import store from '../../store'

import {renderRoutes, SecondRoutes} from '../../routers'
const {Header, Content, Footer} = Layout
const Index = () => {
    let {userName = '暂无'} = store.getState().user
    return (
        <Layout>
            <Header style={{height:"48px",lineHeight:'48px', color: '#fff'}}>
                XXXX系统-有道云课堂-{userName}
            </Header>
            <Layout>
                <SliderMenu></SliderMenu>
                <Layout>
                    <Content style={{height:'calc(100vh - 96px)'}}>
                        {renderRoutes(SecondRoutes)}
                    </Content>
                    <Footer style={{height:'48px', padding: '0 20px', borderTop: '1px solid #ddd', lineHeight: '48px'}}>
                        ...XXXX出品
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default Index