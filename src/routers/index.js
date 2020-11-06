import {Redirect, Route, Switch} from 'react-router-dom'

import Login from '../pages/login/Login'
import Backend from '../pages/backend/Backend'
import Home from '../pages/home/Home'
import NotFound from '../pages/not-found/NotFound'

import Table from '../pages/backend/table/Table'
import Dialog from '../pages/backend/dialog/Dialog'
import Nothing from '../pages/backend/nothing/Nothing'
import ReduxThunk from '../pages/backend/redux-thunk/Container'
import Admin from '../pages/backend/admin/Admin'

export const MainRoutes = [
    {
        path: '/',
        exact: true,
        meta: {},
        component: Home
    },
    {
        path: '/login',
        meta: {},
        component: Login
    },
    {
        path: '/backend',
        meta: {},
        extac: true,
        permission: [2, 3],
        component: Backend
    },
    {
        path: '/not-found',
        component: NotFound
    }
]

export const SecondRoutes = [
    {
        path: '/backend/table',
        meta: {},
        component: Table,
        name: '表格练习'
    },
    {
        path: '/backend/dialog',
        meta: {},
        component: Dialog,
        name: '弹框练习'
    },
    {
        path: '/backend/nothing',
        meta: {},
        component: Nothing,
        name: '无内容页面'
    },
    {
        path: '/backend/redux-thunk',
        meta: {},
        component: ReduxThunk,
        name: 'redux-thunk 异步请求'
    },
    {
        path: '/backend/admin',
        meta: {},
        permission: [3],
        component: Admin,
        name: '配置管理'
    }
]

export const NavConfigList = SecondRoutes.map(item => {
    return Object.assign({}, item, {
        component: null
    })
})

export const renderRoutes = (routes, role) => {
    return(
        <Switch>
            {routes.filter(
                route => !route.permission || route.permission.indexOf(role) > -1
            ).map((route, idx) => {
                return (
                    <Route path={route.path} exact={route.exact} key={route.key ||idx} render={
                        (props) => <route.component {...props} {...route.meta} route={route}/>
                    }/>
                )
            })}
            <Redirect to='/not-found'/>
        </Switch>
    ) 
}