import React from 'react';
import { createBrowserRouter } from "react-router-dom";

const Home = React.lazy(() => import('./pages/Home'));
const Default = React.lazy(() => import('./layout/Default'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Default />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
]);

export default router;