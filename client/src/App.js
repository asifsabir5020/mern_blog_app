import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import './App.scss';
import { DashboardLayout } from './components/layouts/dashboard';
import { LandingLayout } from './components/layouts/landing';
import { Toast } from './components/ui/toast';
import { useAppContext } from './context/app';
import { Dashboard } from './pages/dashboard';
import { Post } from './pages/dashboard/post';
import { PostInput } from './pages/dashboard/post/form';
import { Home } from './pages/home';
import { Login } from './pages/login';


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state, actions } = useAppContext();
  useEffect(() => {
    //TODO: now it executes at every location change, apply check that it should executes only at when required
    if (isDashboard) {
      let postURL = (actions.getUserRole() === 'user') ? '/posts/user' : null;
      actions.fetchPostList(postURL);
    } else {
      actions.fetchPostList();
    }
  }, [location]);

  const isDashboard = (() => {
    const urlParams = location.pathname.split('/');
    if (urlParams.length > 1 && urlParams[1] === 'dashboard') {
      return true
    }
    return false;
  })();

  return (
    <div className="appWrapper">
      <Toast notifications={state.notifications} deleteToast={actions.deleteToast} />
      <Routes>
        <Route path='/auth/login' element={<Login />}></Route>
        <Route path='/' element={<LandingLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/dashboard' element={<DashboardLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="post" element={<Post />} />
          <Route path="post/new" element={<PostInput />} />
          <Route path="post/edit/:postId" element={<PostInput />} />
        </Route>
      </Routes>
    </div>
  );
}



export default App;
