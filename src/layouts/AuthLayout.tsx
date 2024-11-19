import React from 'react';
import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-purple-50">
      <Outlet />
    </div>
  );
}