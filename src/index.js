import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import AddQuiz from './AddQuiz';
import Logout from './Logout';
import Contact from './Contact';

let router=createBrowserRouter([
  {
    path:'',
    element:<Home/>
  },
  {
    path:'contact',
    element:<Contact/>
  },
  {
    path:'login',
    element:<Login/>
  },
  {
    path:'register',
    element:<Register/>
  },
  {
    path:'question',
    element:<AddQuiz/>
  },
  {
    path:'logout',
    element:<Logout/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
