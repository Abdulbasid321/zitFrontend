'use client';

import React, { useEffect, useState } from 'react';

interface UploadedDocument {
  _id: string;
  regNumber: string;
  type: string;
  fileUrl: string;
  fileName: string;
  fileType: string;
  uploadedAt: string;
}

const AdminDocumentsPage = () => {
  const [documents, setDocuments] = useState<UploadedDocument[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const res = await fetch('https://zitapi.onrender.com/documents/all');
        // const res = await fetch('http://localhost:5000/documents/all');
        if (!res.ok) throw new Error('Failed to fetch documents');

        const data = await res.json();
        setDocuments(data);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Uploaded Student Documents
        </h1>

        {loading && (
          <div className="text-center text-gray-600">
            <p>Loading documents...</p>
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 font-medium">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <table className="min-w-full table-auto">
              <thead className="bg-green-600 text-white text-sm uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-6 text-left">Reg Number</th>
                  <th className="py-3 px-6 text-left">Type</th>
                  <th className="py-3 px-6 text-left">File</th>
                  <th className="py-3 px-6 text-left">Uploaded At</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr
                    key={doc._id}
                    className="border-b hover:bg-green-50 transition duration-200"
                  >
                    <td className="py-3 px-6 font-medium">{doc.regNumber}</td>
                    <td className="py-3 px-6 capitalize">{doc.type}</td>
                    <td className="py-3 px-6">
                      <a
                        href={doc.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-700 hover:underline font-medium"
                      >
                        {doc.fileName}
                      </a>
                    </td>
                    <td className="py-3 px-6">
                      {doc.uploadedAt
                        ? new Date(doc.uploadedAt).toLocaleString()
                        : 'Unknown'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {documents.length === 0 && (
              <p className="text-center py-6 text-gray-500">
                No documents uploaded yet.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDocumentsPage;
