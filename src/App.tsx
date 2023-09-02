import React, { FC, ReactElement } from 'react';

import './App.css';
import ResponsiveDrawer from './Components/PrivateComponents/NavigationDrawer';
import { Routes, Route, Navigate } from "react-router-dom"
import Login from './Components/PublicComponents/Login';

const isAuthenticated = true;
function App() {

  return (
    <div className="App">
      <PublicRoutes />
      <PrivateRoutes />
      {/* <ResponsiveDrawer /> */}
    </div>
  );
}

const PublicRoutes: FC = (): ReactElement => {
  return (!isAuthenticated ? <Routes><Route path='/login' element={<Login />} /> <Route path='/home' /></Routes> : <Navigate to="/dashboard" />
  )
}

const PrivateRoutes: FC = (): ReactElement => {
  return (isAuthenticated ? <><ResponsiveDrawer /></> : <Navigate to="/login" />
  )
}

export default App;
