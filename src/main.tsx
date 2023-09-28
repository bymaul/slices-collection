import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import AgencyTwo from './Pages/AgencyTwo.tsx';
import FinanceOne from './Pages/FinanceOne.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/agency-two',
        element: <AgencyTwo />,
    },
    {
        path: '/finance-one',
        element: <FinanceOne />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
