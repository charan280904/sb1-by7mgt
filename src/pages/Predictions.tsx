import React from 'react';
import { AlertTriangle, Bell } from 'lucide-react';

export function Predictions() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Health Predictions</h1>

      <div className="dashboard-card">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-warning/20">
            <AlertTriangle className="h-6 w-6 text-warning" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Risk Assessment</h2>
            <p className="text-gray-600 mt-1">
              Based on your recent health parameters, our AI model predicts:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-lg font-medium text-gray-900">
                Medium Risk (35%) of cardiovascular issues
              </p>
              <p className="text-gray-600 mt-2">
                Consider scheduling a check-up with your doctor and maintaining a healthy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="dashboard-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Alert Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-gray-500" />
                <span>Doctor Notifications</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-gray-500" />
                <span>Guardian Alerts</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                <span className="text-success">1</span>
              </div>
              <p className="text-gray-600">Maintain regular exercise routine</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                <span className="text-success">2</span>
              </div>
              <p className="text-gray-600">Monitor blood pressure weekly</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                <span className="text-success">3</span>
              </div>
              <p className="text-gray-600">Schedule regular check-ups</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}