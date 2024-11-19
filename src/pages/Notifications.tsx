import React, { useState } from 'react';
import { Bell, Heart, Activity, AlertTriangle, CheckCircle, X } from 'lucide-react';

interface Notification {
  id: string;
  type: 'health' | 'alert' | 'system';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'health',
    title: 'Blood Pressure Update',
    message: 'Your blood pressure reading is within normal range.',
    timestamp: '2 hours ago',
    read: false,
  },
  {
    id: '2',
    type: 'alert',
    title: 'Appointment Reminder',
    message: 'You have a check-up scheduled for tomorrow at 10:00 AM.',
    timestamp: '5 hours ago',
    read: false,
  },
  {
    id: '3',
    type: 'system',
    title: 'System Update',
    message: 'New features have been added to your health tracking dashboard.',
    timestamp: '1 day ago',
    read: true,
  },
];

export function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  const getIcon = (type: string) => {
    switch (type) {
      case 'health':
        return <Heart className="h-5 w-5 text-primary" />;
      case 'alert':
        return <AlertTriangle className="h-5 w-5 text-warning" />;
      case 'system':
        return <Activity className="h-5 w-5 text-success" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        <button
          onClick={markAllAsRead}
          className="button-secondary flex items-center"
        >
          <CheckCircle className="mr-2 h-4 w-4" />
          Mark All as Read
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`dashboard-card hover:shadow-md transition-shadow ${
              !notification.read ? 'bg-primary/5' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="mt-1">{getIcon(notification.type)}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                  <p className="text-gray-600 mt-1">{notification.message}</p>
                  <p className="text-sm text-gray-500 mt-2">{notification.timestamp}</p>
                </div>
              </div>
              <div className="flex gap-2">
                {!notification.read && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="p-1 rounded-lg hover:bg-primary/10 text-primary"
                  >
                    <CheckCircle className="h-5 w-5" />
                  </button>
                )}
                <button
                  onClick={() => deleteNotification(notification.id)}
                  className="p-1 rounded-lg hover:bg-danger/10 text-danger"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {notifications.length === 0 && (
          <div className="text-center py-12">
            <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">No Notifications</h3>
            <p className="text-gray-600">You're all caught up!</p>
          </div>
        )}
      </div>
    </div>
  );
}