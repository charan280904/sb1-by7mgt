import React from 'react';
import { Activity, Heart, Droplets, Scale, Activity as ECG } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { date: '2024-01', bp: 120, weight: 70, cholesterol: 180, glucose: 95 },
  { date: '2024-02', bp: 118, weight: 69, cholesterol: 175, glucose: 92 },
  { date: '2024-03', bp: 122, weight: 69, cholesterol: 178, glucose: 94 },
];

const healthMetrics = [
  {
    title: 'Blood Pressure',
    value: '120/80',
    status: 'low',
    icon: Activity,
    change: '-2%',
  },
  {
    title: 'Heart Rate',
    value: '72 bpm',
    status: 'low',
    icon: Heart,
    change: '+1%',
  },
  {
    title: 'Glucose',
    value: '95 mg/dL',
    status: 'medium',
    icon: Droplets,
    change: '+3%',
  },
  {
    title: 'BMI',
    value: '22.4',
    status: 'low',
    icon: Scale,
    change: '0%',
  },
  {
    title: 'ECG',
    value: 'Normal',
    status: 'low',
    icon: ECG,
    change: 'stable',
  },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Health Dashboard</h1>
        <button className="button-primary">Update Data</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {healthMetrics.map((metric) => (
          <div key={metric.title} className="dashboard-card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <p className="mt-2 text-2xl font-semibold text-gray-900">{metric.value}</p>
              </div>
              <metric.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className={`status-badge status-${metric.status}`}>
                {metric.status.charAt(0).toUpperCase() + metric.status.slice(1)}
              </span>
              <span className="text-sm text-gray-600">{metric.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Health Trends</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="bp" stroke="#3b82f6" name="Blood Pressure" />
              <Line type="monotone" dataKey="weight" stroke="#10b981" name="Weight" />
              <Line type="monotone" dataKey="cholesterol" stroke="#f59e0b" name="Cholesterol" />
              <Line type="monotone" dataKey="glucose" stroke="#ef4444" name="Glucose" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="dashboard-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Risk Assessment</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Heart Risk Level</span>
              <span className="status-badge status-low">Low Risk</span>
            </div>
            <p className="text-sm text-gray-600">
              Based on your current health metrics, you're maintaining a healthy lifestyle. Keep it up!
            </p>
          </div>
        </div>

        <div className="dashboard-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Updates</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Activity className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-gray-900">Blood pressure checked</p>
                <p className="text-xs text-gray-600">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Scale className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-gray-900">Weight measured</p>
                <p className="text-xs text-gray-600">Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}