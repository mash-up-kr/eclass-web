import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Sample Code
const LazyMainPage = lazy(() => import(/* webpackChunkName: "Main" */ 'pages/MainPage'));

const App = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LazyMainPage} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
