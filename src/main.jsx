import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';
import './index.css';

import Root from './routes/root';
import ErrorPage from './error-page';
import Contact from './routes/contact';

const router = createBrowserRouter ( [ 
  {
    path:'/', element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [ 
      {
        path: "contacts/:contactId",
        element: <Contact></Contact>,
      }
     ]
  }, 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <RouterProvider router={router}
        
        ></RouterProvider>

  </React.StrictMode>,
)
