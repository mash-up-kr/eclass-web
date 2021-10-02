import { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const LazyMonthlyDiaryPage = lazy(() => import(/* webpackChunkName: "MonthlyDiaryPage" */ 'pages/MonthlyDiaryPage'));
const LazyDiaryDetailPage = lazy(() => import(/* webpackChunkName: "DiaryDetailPage" */ 'pages/DiaryDetailPage'));

const App = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/monthly-diary" />
          </Route>
          <Route exact path="/monthly-diary" component={LazyMonthlyDiaryPage} />
          <Route exact path="/diary-detail" component={LazyDiaryDetailPage} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
