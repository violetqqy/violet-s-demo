import Home from '../pages/Home'
import Login from '../pages/Login'
import Backend from '../pages/Backend'
import Admin from '../pages/Admin'
import NotFound from '../pages/NotFound'

export const routes = [{
  path: '/',
  exact: true,
  component: Home,
  permission: ['guest', 'user', 'admin']
}, {
  path: '/login',
  exact: true,
  component: Login,
  permission: ['guest', 'user', 'admin']
}, {
  path: '/backend',
  exact: true,
  component: Backend,
  permission: ['user', 'admin']
}, {
  path: '/admin',
  exact: true,
  component: Admin,
  permission: ['admin']
}, {
  path: 'not-found',
  extra: true,
  component: NotFound,
  permission: ['guest', 'user', 'admin']
}]

