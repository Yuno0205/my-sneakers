import { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

import LoadingPage from './pages/LoadingPage/LoadingPage';
const SideBarLayout = lazy(() => import('./layouts/SideBarLayout/SideBarLayout'));
const DefaultLayout = lazy(() => import('./layouts/DefaultLayout'));

function App() {
    return (
        <Router>
            <Suspense fallback={<LoadingPage />}>
                <div>
                    <Routes>
                        {publicRoutes.map((route, index) => {
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
