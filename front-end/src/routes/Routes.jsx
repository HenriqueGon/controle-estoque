import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import CompanyRegister from 'screens/Company';
import UserRegister from 'screens/User';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact />
        <Route path='/empresas/incluir' component={CompanyRegister} />
        <Route path='/usuarios/incluir' component={UserRegister} />
      </Switch>
    </Router>
  );
}

export default Routes;