import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
// RTK
import { Provider } from "react-redux";
// router
import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from './pages/Signup.jsx';
import PrivateRoute from './_components/PrivateRoute.jsx';
import Home from './pages/Home.jsx';
import Models from './pages/Models';
import Post from './pages/Post';
import { store } from './store.js';
import AdminRoute from './_components/AdminRoute.jsx';
import Users from './pages/admin/Users.jsx';
import Playground from './pages/Playground/index.jsx';

const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<App />}>
      {/* Private Routes */}
      <Route path="/" element={<PrivateRoute />}>
        <Route path="" element={<Home />} />
        <Route path="models" element={<Models />} />
        <Route path="models/post/:slug" element={<Post />} />
        <Route path="playground" element={<Playground />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Route>
    <Route path="login" element={<Login />} />
    <Route path="signup" element={<Signup />} />
  </Route>
)

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
