import {createBrowserRouter} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Auth/Login';
import UserLayout from '../layouts/UserLayout';
import Profile from '../pages/Profile';
import NotFoundPage from '../pages/Errors/404';

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                path: '',
                element: <Dashboard />
            },
            {
                path: 'profile',
                element: <Profile />
            },
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]);

export default router;