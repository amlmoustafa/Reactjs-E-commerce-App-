import './default.scss'
import { Route, Switch } from 'react-router-dom'
import Registration from './pages/Registration';
import MainLayout from './layoutes/MainLayout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => (<MainLayout>
          <HomePage />
        </MainLayout>)} />
        <Route path='/registration' render={() => (<MainLayout>
          <Registration />
        </MainLayout>)} />
      </Switch>
    </div>
  );
}

export default App;
