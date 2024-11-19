import React, { useState } from 'react';
import { Shield, Share2, CheckCircle, Clock } from 'lucide-react';

interface Transaction {
  id: string;
  type: string;
  timestamp: string;
  status: 'completed' | 'pending';
  hash: string;
}

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'Health Data Share',
    timestamp: '2024-03-15 14:30',
    status: 'completed',
    hash: '0x1234...5678',
  },
  {
    id: '2',
    type: 'Access Grant',
    timestamp: '2024-03-14 09:15',
    status: 'completed',
    hash: '0x5678...9012',
  },
  {
    id: '3',
    type: 'Data Update',
    timestamp: '2024-03-13 16:45',
    status: 'pending',
    hash: '0x9012...3456',
  },
];

export function Blockchain() {
  const [transactions] = useState<Transaction[]>(mockTransactions);

  const shareData = () => {
    // TODO: Implement blockchain data sharing
    console.log('Sharing data via blockchain');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Blockchain Integration</h1>
        <button onClick={shareData} className="button-primary flex items-center">
          <Share2 className="mr-2 h-4 w-4" />
          Share Data
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="dashboard-card">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Secure Storage</h3>
              <p className="text-sm text-gray-600">Your data is encrypted</p>
            </div>
          </div>
        </div>
        <div className="dashboard-card">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-success/10">
              <Share2 className="h-6 w-6 text-success" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Shared Access</h3>
              <p className="text-sm text-gray-600">2 active shares</p>
            </div>
          </div>
        </div>
        <div className="dashboard-card">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-warning/10">
              <Clock className="h-6 w-6 text-warning" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Transactions</h3>
              <p className="text-sm text-gray-600">Last 24 hours: 3</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Transaction History</h2>
        <div className="space-y-4">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                {tx.status === 'completed' ? (
                  <CheckCircle className="h-5 w-5 text-success" />
                ) : (
                  <Clock className="h-5 w-5 text-warning" />
                )}
                <div>
                  <p className="font-medium text-gray-900">{tx.type}</p>
                  <p className="text-sm text-gray-600">{tx.timestamp}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-mono text-gray-600">{tx.hash}</p>
                <p className="text-sm text-gray-600 capitalize">{tx.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}