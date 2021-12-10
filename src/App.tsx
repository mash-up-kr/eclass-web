import Toast, { toastTextAtom } from 'components/Toast';
import { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

const LazyMonthlyDiaryPage = lazy(() => import(/* webpackChunkName: "MonthlyDiaryPage" */ 'pages/MonthlyDiaryPage'));
const LazyDiaryDetailPage = lazy(() => import(/* webpackChunkName: "DiaryDetailPage" */ 'pages/DiaryDetailPage'));

const queryClient = new QueryClient();

const App = () => {
  const toastText = useRecoilValue(toastTextAtom);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={null}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Redirect to="/monthly-diary" />
              </Route>
              <Route exact path="/monthly-diary" component={LazyMonthlyDiaryPage} />
              <Route exact path="/diary-detail/:diaryId" component={LazyDiaryDetailPage} />
            </Switch>
          </BrowserRouter>
        </Suspense>
        {toastText && <Toast />}
      </QueryClientProvider>
    </>
  );
};

export default App;
