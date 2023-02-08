import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home';
import routes from './routes';
import Login from './../pages/Login';
import Layout from './../layout/Layout';
import LayoutNoUser from '../layout/LayoutNoUser';
import Register from '../pages/Register';
import MyAccount from '../pages/MyAccount';

const AppRouter = ()=>{
  return(
    <Routes>
      <Route element={<Layout/>}>
        <Route exact path={routes.home} element={<Home/>} />
        <Route exact path={routes.my_account} element={<MyAccount/>} />
      </Route>
      <Route element={<LayoutNoUser/>}>
        <Route exact path={routes.login} element={<Login/>} />
        <Route exact path={routes.register} element={<Register/>} />
      </Route>
    </Routes>
  )
}

export default AppRouter