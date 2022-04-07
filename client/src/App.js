import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import { DashboardLayout } from './components/layouts/dashboard';
import { LandingLayout } from './components/layouts/landing';
import { Dashboard } from './pages/dashboard';
import { PostInput } from './pages/dashboard/post/form';
import { Home } from './pages/home';
import { Login } from './pages/login';


function App() {
  return (
    <Routes>
      <Route path='/auth/login' element={<Login />}></Route>
      <Route path='/' element={<LandingLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/dashboard' element={<DashboardLayout />} >
        <Route index element={<Dashboard />} />
        <Route path="post" element={<PostInput />} />
      </Route>
    </Routes>
  );
}



export default App;
