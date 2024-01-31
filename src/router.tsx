import React from 'react';
import { App } from './components/app';
import { About, Home, NotFound } from './pages';

import { createBrowserRouter } from 'react-router-dom';

/**
 * Defines the router and routes for the site
 */
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        }
      ]
    }
  ]);

export default router;