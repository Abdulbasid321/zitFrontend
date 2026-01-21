'use client';

import React, { useState } from 'react';
import axios from '@/lib/axios'; // adjust if needed
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [program, setProgram] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [otp, setOtp] = useState<string[]>(Array(8).fill(''));
  const [loading, setLoading] = useState(false);

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !fullName ||
      !program ||
      !accountNumber ||
      !accountName ||
      otp.join('').length !== 8
    ) {
      toast.error('Please fill in all fields and enter the 8-digit code.');
      return;
    }

    setLoading(true);

    try {
      await axios.post('http://localhost:8000/api/register', {
        fullName,
        program,
        accountNumber,
        accountName,
        verificationCode: otp.join('')
      });

      toast.success('Registration submitted successfully.');

      // reset form
      setFullName('');
      setProgram('');
      setAccountNumber('');
      setAccountName('');
      setOtp(Array(8).fill(''));
    } catch (error: any) {
      console.error('Registration error:', error);
      toast.error(
        error?.response?.data?.message || 'Failed to submit registration.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <ToastContainer position="top-right" />

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow"
      >
        <h1 className="text-2xl font-bold text-center mb-2">
          Register for the Next Cohort
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Complete the form to secure your slot
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-4"
          required
        />

        <select
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-4"
          required
        >
          <option value="">Select Program</option>
          <option value="Web Design">Web Design</option>
          <option value="Graphics Design">Graphics Design</option>
          <option value="Tailoring">Tailoring</option>
        </select>

        <input
          type="text"
          placeholder="Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-4"
          required
        />

        <input
          type="text"
          placeholder="Account Name"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-5"
          required
        />

        <label className="block text-sm font-medium mb-2">
          Enter 8-Digit Confirmation Code
        </label>

        <div className="flex justify-between gap-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(e.target.value, index)}
              className="w-9 h-11 border rounded text-center text-lg"
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit Registration'}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
