import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { path } from './constansts/path'
import NotFound from './pages/notFound/NotFound'
import RegisterLayout from './Layouts/RegisterLayout.jsx/RegisterLayout'
import MainLayout from './Layouts/MainLayout/MainLayout'
import Register from './pages/auth/Register/Register'
import Home from './pages/home/Home'
import Login from './pages/auth/Login/Login'
import AuthenticatedGuard from './guards/AuthenticatedGuard'
import UnAuthenticatedGuard from './guards/UnAuthenticatedGuard'

// const Home = lazy(() => import('./pages/home/Home'))
// const Register = lazy(() => import('./pages/auth/Register/Register'))
export default function Routes() {
  return (
    <Switch>
      <Route path={path.home} exact>
        <MainLayout>
          <Home></Home>
        </MainLayout>
      </Route>
      <Route path={path.login}>
        <RegisterLayout title="Đăng nhập">
          <Login />
        </RegisterLayout>
      </Route>
      <Route path={path.register}>
        <RegisterLayout title="Đăng ký">
          <Register />
        </RegisterLayout>
      </Route>
      <Route path={path.notFound}>
        <NotFound />
      </Route>
    </Switch>
  )
}
