import React, { FC, ReactElement } from 'react';

import './App.css';
import NavigationDrawer from './Components/NavigationDrawer';
import { Routes, Route, Navigate } from "react-router-dom"
import Login from './Components/PublicComponents/Login';
import { UseUserState } from "./utils/UserContext"

function App() {

  return (
    <div className="App">
      <PublicRoutes />
      <PrivateRoutes />
    </div>
  );
}

const PublicRoutes: FC = (): ReactElement => {
  const isAuthenticated = UseUserState();
  return (!isAuthenticated ? <Routes><Route path='/login' element={<Login />} /> <Route path='/home' /></Routes> : <Navigate to="/dashboard" />
  )
}

const PrivateRoutes: FC = (): ReactElement => {
  const isAuthenticated = UseUserState();
  return (isAuthenticated ? <><NavigationDrawer /></> : <Navigate to="/login" />
  )
}

export default App;
