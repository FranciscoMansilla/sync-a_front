import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home';
import routes from './routes';
import Login from './../pages/Login';
import Layout from './../layout/Layout';
import LayoutNoUser from '../layout/LayoutNoUser';
import Register from '../pages/Register';
import MyAccount from '../pages/MyAccount';
import MyStore from './../pages/MyStore';
import NewBeat from './../pages/NewBeat';

const AppRouter = ()=>{
  return(
    <Routes>
      <Route element={<Layout/>}>
        <Route exact path={routes.home} element={<Home/>} />
        <Route exact path={routes.my_account} element={<MyAccount/>} />
        <Route exact path={routes.my_store} element={<MyStore/>} />
        <Route exact path={routes.new_product} element={<NewBeat/>} />
      </Route>
      <Route element={<LayoutNoUser/>}>
        <Route exact path={routes.login} element={<Login/>} />
        <Route exact path={routes.register} element={<Register/>} />
      </Route>
    </Routes>
  )
}

export default AppRouter