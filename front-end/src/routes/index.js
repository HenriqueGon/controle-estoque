import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Navbar from 'components/Navbar';

import CompanyList from 'screens/Company/List';
import CompanyRegister from 'screens/Company/Register';

import UserList from 'screens/User/List';
import UserRegister from 'screens/User/Register';

import ProviderList from 'screens/Provider/List';
import ProviderRegister from 'screens/Provider/Register';

import ProductList from 'screens/Product/List';
import ProductRegister from 'screens/Product/Register';

function NavbarData() {
  return [
    {
      title: 'Home',
      path: '/',
      icon: 'fas fa-home',
    },
    {
      title: 'Empresas',
      path: '/empresas',
      icon: 'fas fa-building',
    },
    {
      title: 'Usuários',
      path: '/usuarios',
      icon: 'fas fa-user',
    },
    {
      title: 'Fornecedores',
      path: '/fornecedores',
      icon: 'fas fa-users',
    },
    {
      title: 'Produtos',
      path: '/produtos',
      icon: 'fas fa-box',
    },
    {
      title: 'Ajustes',
      path: '/ajustes',
      icon: 'fas fa-cogs',
    },
  ];
}

const Routes = () => {
  return (
    <Router>
      <Navbar data={NavbarData()} />
      <Switch>
        <Route path='/' exact />
        <Route path='/empresas' exact component={CompanyList} />
        <Route path='/empresas/incluir' component={CompanyRegister} />

        <Route path='/usuarios' exact component={UserList} />
        <Route path='/usuarios/incluir' component={UserRegister} />

        <Route path='/fornecedores' exact component={ProviderList} />
        <Route path='/fornecedores/incluir' component={ProviderRegister} />

        <Route path='/produtos' exact component={ProductList} />
        <Route path='/produtos/incluir' component={ProductRegister} />
      </Switch>
    </Router>
  );
}

export default Routes;