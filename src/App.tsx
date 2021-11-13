import Toast, { toastTextAtom } from 'components/Toast';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

const LazyMonthlyDiaryPage = lazy(() => import(/* webpackChunkName: "MonthlyDiaryPage" */ 'pages/MonthlyDiaryPage'));
const LazyDiaryDetailPage = lazy(() => import(/* webpackChunkName: "DiaryDetailPage" */ 'pages/DiaryDetailPage'));
const LazyTodoDetailPage = lazy(() => import(/* webpackChunkName: "TodoDetailPage" */ 'pages/TodoDetailPage'));

const App = () => {
  const toastText = useRecoilValue(toastTextAtom);

  return (
    <>
      <Suspense fallback={null}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/monthly-diary" />
            </Route>
            <Route exact path="/monthly-diary" component={LazyMonthlyDiaryPage} />
            <Route exact path="/diary-detail" component={LazyDiaryDetailPage} />
            <Route exact path="/todo-detail" component={LazyTodoDetailPage} />
          </Switch>
        </BrowserRouter>
      </Suspense>
      {toastText && <Toast />}
    </>
  );
};

export default App;
