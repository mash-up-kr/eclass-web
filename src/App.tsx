import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';

// Sample Code
const LazyMainPage = lazy(() => import(/* webpackChunkName: "Main" */ 'pages/MainPage'));

const App = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/" component={LazyMainPage} />
      </Switch>
    </Suspense>
  );
};

export default App;
