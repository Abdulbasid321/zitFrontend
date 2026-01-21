'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Registration = {
  _id: string;
  fullName: string;
  program: string;
  accountNumber: string;
  accountName: string;
  verificationCode: string;
  createdAt: string;
};

const AdminRegistrationsPage = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      const res = await axios.get(
        'http://localhost:8000/api/register'
      );
      setRegistrations(res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to load registrations');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-600">{error}</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Registered Users
      </h2>

      {registrations.length === 0 ? (
        <p>No registrations found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2">Full Name</th>
                <th className="border px-3 py-2">Program</th>
                <th className="border px-3 py-2">Account Name</th>
                <th className="border px-3 py-2">Account Number</th>
                <th className="border px-3 py-2">Code</th>
                <th className="border px-3 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((reg) => (
                <tr key={reg._id}>
                  <td className="border px-3 py-2">{reg.fullName}</td>
                  <td className="border px-3 py-2">{reg.program}</td>
                  <td className="border px-3 py-2">{reg.accountName}</td>
                  <td className="border px-3 py-2">{reg.accountNumber}</td>
                  <td className="border px-3 py-2">{reg.verificationCode}</td>
                  <td className="border px-3 py-2 text-sm">
                    {new Date(reg.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminRegistrationsPage;
