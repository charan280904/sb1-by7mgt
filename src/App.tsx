import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OnboardingLayout } from './layouts/OnboardingLayout';
import { AuthLayout } from './layouts/AuthLayout';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Onboarding } from './pages/Onboarding';
import { Login } from './pages/auth/Login';
import { SignUp } from './pages/auth/SignUp';
import { ProfileSetup } from './pages/auth/ProfileSetup';
import { Dashboard } from './pages/Dashboard';
import { HealthParameters } from './pages/HealthParameters';
import { Predictions } from './pages/Predictions';
import { Contacts } from './pages/Contacts';
import { History } from './pages/History';
import { Blockchain } from './pages/Blockchain';
import { Settings } from './pages/Settings';
import { Notifications } from './pages/Notifications';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<OnboardingLayout />}>
          <Route path="/" element={<Onboarding />} />
        </Route>
        
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
        </Route>
        
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/parameters" element={<HealthParameters />} />
          <Route path="/predictions" element={<Predictions />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/history" element={<History />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;