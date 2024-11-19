import React, { useState } from 'react';
import { UserPlus, Share2, Trash2 } from 'lucide-react';
import { Input } from '../components/Input';

interface Contact {
  id: string;
  name: string;
  role: 'doctor' | 'guardian';
  phone: string;
  email: string;
  canViewData: boolean;
}

const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    role: 'doctor',
    phone: '+1 234 567 8900',
    email: 'dr.sarah@example.com',
    canViewData: true,
  },
  {
    id: '2',
    name: 'Michael Smith',
    role: 'guardian',
    phone: '+1 234 567 8901',
    email: 'michael@example.com',
    canViewData: true,
  },
];

export function Contacts() {
  const [contacts, setContacts] = useState<Contact[]>(mockContacts);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newContact, setNewContact] = useState({
    name: '',
    role: 'doctor',
    phone: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contact: Contact = {
      id: Date.now().toString(),
      ...newContact,
      canViewData: true,
    } as Contact;
    setContacts([...contacts, contact]);
    setShowAddForm(false);
    setNewContact({ name: '', role: 'doctor', phone: '', email: '' });
  };

  const toggleDataAccess = (id: string) => {
    setContacts(contacts.map(contact =>
      contact.id === id ? { ...contact, canViewData: !contact.canViewData } : contact
    ));
  };

  const deleteContact = (id: string) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Contacts</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="button-primary flex items-center"
        >
          <UserPlus className="mr-2 h-4 w-4" />
          Add Contact
        </button>
      </div>

      {showAddForm && (
        <div className="dashboard-card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Contact</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Name"
              value={newContact.name}
              onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
              required
            />
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <select
                value={newContact.role}
                onChange={(e) => setNewContact({ ...newContact, role: e.target.value as 'doctor' | 'guardian' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              >
                <option value="doctor">Doctor</option>
                <option value="guardian">Guardian</option>
              </select>
            </div>
            <Input
              label="Phone"
              value={newContact.phone}
              onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
              required
            />
            <Input
              label="Email"
              type="email"
              value={newContact.email}
              onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
              required
            />
            <div className="flex gap-4">
              <button type="submit" className="button-primary flex-1">
                Add Contact
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="button-secondary flex-1"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid gap-6">
        {contacts.map((contact) => (
          <div key={contact.id} className="dashboard-card">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{contact.name}</h3>
                <p className="text-sm text-gray-600 capitalize">{contact.role}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleDataAccess(contact.id)}
                  className={`p-2 rounded-lg ${
                    contact.canViewData ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  <Share2 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => deleteContact(contact.id)}
                  className="p-2 rounded-lg hover:bg-danger/10 text-danger"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Phone:</span> {contact.phone}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Email:</span> {contact.email}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Data Access:</span>{' '}
                <span className={contact.canViewData ? 'text-success' : 'text-danger'}>
                  {contact.canViewData ? 'Enabled' : 'Disabled'}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}