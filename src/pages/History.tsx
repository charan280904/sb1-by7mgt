import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import { Download, ChevronRight } from 'lucide-react';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const mockHealthData = {
  '2024-03-15': {
    bp: '120/80',
    heartRate: '72',
    glucose: '95',
    weight: '70',
  },
  '2024-03-10': {
    bp: '118/78',
    heartRate: '70',
    glucose: '92',
    weight: '69.5',
  },
};

export function History() {
  const [date, setDate] = useState<Value>(new Date());
  const formattedDate = date instanceof Date ? format(date, 'yyyy-MM-dd') : '';
  const selectedData = mockHealthData[formattedDate as keyof typeof mockHealthData];

  const generateReport = () => {
    // TODO: Implement PDF report generation
    console.log('Generating report for:', formattedDate);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Health History</h1>
        <button onClick={generateReport} className="button-primary flex items-center">
          <Download className="mr-2 h-4 w-4" />
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="dashboard-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Date</h2>
          <Calendar
            onChange={setDate}
            value={date}
            className="w-full border-none"
            tileClassName="rounded-lg hover:bg-primary/10"
          />
        </div>

        <div className="dashboard-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Health Data</h2>
          {selectedData ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Blood Pressure</p>
                  <p className="text-lg font-semibold text-gray-900">{selectedData.bp}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Heart Rate</p>
                  <p className="text-lg font-semibold text-gray-900">{selectedData.heartRate} bpm</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Glucose</p>
                  <p className="text-lg font-semibold text-gray-900">{selectedData.glucose} mg/dL</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Weight</p>
                  <p className="text-lg font-semibold text-gray-900">{selectedData.weight} kg</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          ) : (
            <p className="text-gray-600">No data available for selected date</p>
          )}
        </div>
      </div>
    </div>
  );
}