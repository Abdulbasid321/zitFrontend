"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const StudentDashboard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [regNo, setRegNo] = useState("");
  const [results, setResults] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("No token found! Redirecting to login...");
      router.replace("/login");
    } else {
      setIsAuthenticated(true);
    }

    setLoading(false);
  }, []);

  const handleFetchResults = async () => {
    setFetching(true);
    setError("");
    setResults([]);

    try {
      const encodedRegNo = encodeURIComponent(regNo);
      const res = await axios.get(
        // `http://localhost:5000/getResults/CSE191`
        `https://istiqamauni-1.onrender.com/getResults/${encodedRegNo}`
        // `http://localhost:5000/getResults/${encodedRegNo}`
      );
      setResults(res.data.results);
    } catch (err: any) {
      setError(err?.response?.data?.error || "An error occurred.");
    } finally {
      setFetching(false);
    }
  };

  if (loading || !isAuthenticated) return null;

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-100 flex flex-col items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to Your Dashboard
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            placeholder="Enter your Registration Number"
            className="w-full px-4 py-2 border rounded"
          />

          <button
            onClick={handleFetchResults}
            disabled={fetching || !regNo}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {fetching ? "Fetching..." : "View My Results"}
          </button>

          {error && <p className="text-red-600">{error}</p>}
        </div>
      </div>

      {results.length > 0 && (
        <div className="mt-8 w-full max-w-3xl bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">Your Uploaded Results</h3>
          <ul className="space-y-4">
            {results.map((result: any) => (
              <li key={result._id} className="border-b pb-2">
                <p className="text-gray-800 font-medium">File: {result.fileName}</p>
                {/* <p className="text-gray-600 text-sm">Class: {result.classId?.name || "N/A"}</p> */}
              <a
  href={result.fileUrl}
  className="text-blue-500 hover:underline"
  target="_blank"
  rel="noopener noreferrer"
>
  Download Result
</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
