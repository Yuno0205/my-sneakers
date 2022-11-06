import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

import DefaultLayout from './layouts/DefaultLayout';
import SideBarLayout from './layouts/SideBarLayout/SideBarLayout';

function App() {
    return (
        <Router>
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
        </Router>
    );
}

export default App;
