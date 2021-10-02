import { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const LazyMonthlyDiaryPage = lazy(() => import(/* webpackChunkName: "MonthlyDiaryPage" */ 'pages/MonthlyDiaryPage'));

const App = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/monthly-diary" />
          </Route>
          <Route exact path="/monthly-diary" component={LazyMonthlyDiaryPage} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
