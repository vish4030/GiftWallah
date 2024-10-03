import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import store from './store';
import App from './App.jsx';
import Home from './pages/Home';
import Orders from './pages/Orders';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Contact from './pages/Contact'; // Fixed the case for Contact import
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ErrorPage from './pages/ErrorPage'; // New ErrorPage component

// Define the routes with error handling for non-existent pages
const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Wrap all routes under the main App component
    errorElement: <ErrorPage />, // Fallback for undefined routes
    children: [
      { path: '/', element: <Home /> },
      { path: '/orders', element: <Orders /> },
      { path: '/about', element: <AboutUs /> },
      { path: '/blog', element: <Blog /> },
      { path: '/contact', element: <Contact /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      // Wildcard route for undefined paths
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

// Render the application with RouterProvider and Redux store
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
