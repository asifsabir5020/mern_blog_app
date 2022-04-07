import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import { DashboardLayout } from './components/layouts/dashboard';
import { LandingLayout } from './components/layouts/landing';
import { Dashboard } from './pages/dashboard';
import { Post } from './pages/dashboard/post';
import { PostInput } from './pages/dashboard/post/form';
import { Home } from './pages/home';
import { Login } from './pages/login';


function App() {

  useEffect(() => {
    // token refresh code
  }, []);

  return (
    <Routes>
      <Route path='/auth/login' element={<Login />}></Route>
      <Route path='/' element={<LandingLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/dashboard' element={<DashboardLayout />} >
        <Route index element={<Dashboard />} />
        <Route path="post" element={<Post />} />
        <Route path="post/new" element={<PostInput />} />
      </Route>
    </Routes>
  );
}



export default App;
