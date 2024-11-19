import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Activity, 
  Brain, 
  Users, 
  History, 
  Share2, 
  Settings, 
  Bell 
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Health Parameters', href: '/parameters', icon: Activity },
  { name: 'Predictions', href: '/predictions', icon: Brain },
  { name: 'Contacts', href: '/contacts', icon: Users },
  { name: 'History', href: '/history', icon: History },
  { name: 'Blockchain', href: '/blockchain', icon: Share2 },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <Link to="/dashboard" className="flex ml-2 md:mr-24">
                <Activity className="h-8 w-8 text-primary" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap ml-2">
                  HealthTrack
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link 
                to="/notifications"
                className="p-2 text-gray-500 rounded-lg hover:text-gray-900"
              >
                <Bell className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 ${
                      isActive ? 'bg-gray-100' : ''
                    }`}
                  >
                    <item.icon className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-gray-500'}`} />
                    <span className={`ml-3 ${isActive ? 'font-semibold' : ''}`}>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 pt-20">
        <div className="p-4 rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
}