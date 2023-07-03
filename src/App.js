import { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getRoutes } from './routes';

import LoadingPage from './pages/LoadingPage/LoadingPage';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './redux/userSlice';

const SideBarLayout = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import('./layouts/SideBarLayout/SideBarLayout')), 1500);
    });
});

const DefaultLayout = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import('./layouts/DefaultLayout')), 3000);
    });
});

function App() {
    // const isLoggedIn = useSelector(selectIsLoggedIn);
    const isLoggedIn = true; //Test check out
    return (
        <Router>
            <Suspense fallback={<LoadingPage />}>
                <div>
                    <Routes>
                        {getRoutes(isLoggedIn).map((route, index) => {
                            let Layout = route.layout === null ? Fragment : DefaultLayout;
                            if (route.layout === 'sidebar') {
                                Layout = SideBarLayout;
                            }

                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Suspense>
        </Router>
    );
}

export default App;
