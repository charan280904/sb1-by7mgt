import React, { useState } from 'react';
import { Input } from '../components/Input';

export function HealthParameters() {
  const [formData, setFormData] = useState({
    systolic: '',
    diastolic: '',
    weight: '',
    height: '',
    cholesterol: '',
    glucose: '',
    ecg: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save health parameters
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Update Health Parameters</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="dashboard-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Blood Pressure</h2>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Systolic (mmHg)"
              type="number"
              value={formData.systolic}
              onChange={(e) => setFormData({ ...formData, systolic: e.target.value })}
              placeholder="120"
            />
            <Input
              label="Diastolic (mmHg)"
              type="number"
              value={formData.diastolic}
              onChange={(e) => setFormData({ ...formData, diastolic: e.target.value })}
              placeholder="80"
            />
          </div>
        </div>

        <div className="dashboard-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Body Measurements</h2>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Weight (kg)"
              type="number"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              placeholder="70"
            />
            <Input
              label="Height (cm)"
              type="number"
              value={formData.height}
              onChange={(e) => setFormData({ ...formData, height: e.target.value })}
              placeholder="175"
            />
          </div>
        </div>

        <div className="dashboard-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Blood Tests</h2>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Cholesterol (mg/dL)"
              type="number"
              value={formData.cholesterol}
              onChange={(e) => setFormData({ ...formData, cholesterol: e.target.value })}
              placeholder="180"
            />
            <Input
              label="Glucose (mg/dL)"
              type="number"
              value={formData.glucose}
              onChange={(e) => setFormData({ ...formData, glucose: e.target.value })}
              placeholder="95"
            />
          </div>
        </div>

        <div className="dashboard-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">ECG Reading</h2>
          <Input
            label="ECG Value"
            type="text"
            value={formData.ecg}
            onChange={(e) => setFormData({ ...formData, ecg: e.target.value })}
            placeholder="Normal"
          />
        </div>

        <button type="submit" className="button-primary w-full">
          Save Parameters
        </button>
      </form>
    </div>
  );
}