import { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const LazyMonthlyDiaryPage = lazy(() => import(/* webpackChunkName: "MonthlyDiaryPage" */ 'pages/MonthlyDiaryPage'));
const LazyDiaryDetailPage = lazy(() => import(/* webpackChunkName: "DiaryDetailPage" */ 'pages/DiaryDetailPage'));
const LazyInfoInputPage = lazy(() => import('pages/InfoInputPage/InfoInputPage'));

const App = () => {
  return (
    <RecoilRoot>
      <Suspense fallback={null}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/monthly-diary" />
            </Route>
            <Route exact path="/monthly-diary" component={LazyMonthlyDiaryPage} />
            <Route exact path="/diary-detail" component={LazyDiaryDetailPage} />
            <Route exact path="/info-input" component={LazyInfoInputPage} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </RecoilRoot>
  );
};

export default App;
