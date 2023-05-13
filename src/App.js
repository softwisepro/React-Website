import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Home from './container/Home';
import Login from './components/Login';

function App() {
  return (
    <GoogleOAuthProvider
      clientId='874226824278-15gojs0626gu87vqdqckrmk02n9udkkl.apps.googleusercontent.com'
    >
      <Routes>
        <Route path='/*' element={<Login />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
