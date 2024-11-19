import React, { useState } from 'react';
import { Input } from '../components/Input';
import { User, Bell, Shield, Moon, LogOut } from 'lucide-react';

export function Settings() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 8900',
    weight: '70',
    height: '175',
  });

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
  });

  const [theme, setTheme] = useState('light');

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Update profile
  };

  const handleLogout = () => {
    // TODO: Implement logout
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

      <div className="dashboard-card">
        <div className="flex items-center gap-3 mb-6">
          <User className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-gray-900">Profile Settings</h2>
        </div>
        <form onSubmit={handleProfileUpdate} className="space-y-4">
          <Input
            label="Full Name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
          <Input
            label="Email"
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <Input
            label="Phone"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Weight (kg)"
              type="number"
              value={profile.weight}
              onChange={(e) => setProfile({ ...profile, weight: e.target.value })}
            />
            <Input
              label="Height (cm)"
              type="number"
              value={profile.height}
              onChange={(e) => setProfile({ ...profile, height: e.target.value })}
            />
          </div>
          <button type="submit" className="button-primary">
            Update Profile
          </button>
        </form>
      </div>

      <div className="dashboard-card">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-gray-900">Notification Preferences</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Email Notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={notifications.email}
                onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Push Notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={notifications.push}
                onChange={(e) => setNotifications({ ...notifications, push: e.target.checked })}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">SMS Notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={notifications.sms}
                onChange={(e) => setNotifications({ ...notifications, sms: e.target.checked })}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="dashboard-card">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-gray-900">Privacy & Security</h2>
        </div>
        <div className="space-y-4">
          <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100">
            Change Password
          </button>
          <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100">
            Two-Factor Authentication
          </button>
          <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100">
            Connected Devices
          </button>
        </div>
      </div>

      <div className="dashboard-card">
        <div className="flex items-center gap-3 mb-6">
          <Moon className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-gray-900">Appearance</h2>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setTheme('light')}
            className={`flex-1 p-4 rounded-lg border-2 ${
              theme === 'light' ? 'border-primary' : 'border-gray-200'
            }`}
          >
            Light
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={`flex-1 p-4 rounded-lg border-2 ${
              theme === 'dark' ? 'border-primary' : 'border-gray-200'
            }`}
          >
            Dark
          </button>
        </div>
      </div>

      <div className="dashboard-card">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 text-danger hover:bg-danger/10 px-4 py-3 rounded-lg"
        >
          <LogOut className="h-5 w-5" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}