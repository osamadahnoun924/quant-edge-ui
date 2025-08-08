import { Navigate, type RouteObject } from 'react-router';
import { Landing } from './pages/landing';
import { MainLayout } from './layouts';
import { ContactUs } from './pages/contact-us';
import { About } from './pages/about';
import { Login } from './pages/log-in';
import { Pricing } from './pages/pricing';
import { Tutorial } from './pages/tutorial';
import { StartAnalyzing } from './pages/start-analyzing';

export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Landing /> },
      { path: '/contact-us', element: <ContactUs /> },
      { path: '/about', element: <About /> },
      { path: '/tutorial', element: <Tutorial /> },
      { path: '/pricing', element: <Pricing /> },
      { path: '/login', element: <Login /> },
      { path: '/start-analyzing', element: <StartAnalyzing /> },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
];
