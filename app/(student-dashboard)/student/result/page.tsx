// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";

// const StudentDashboard = () => {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const [regNo, setRegNo] = useState("");
//   const [results, setResults] = useState([]);
//   const [fetching, setFetching] = useState(false);
//   const [error, setError] = useState("");

//   // useEffect(() => {
//   //   const token = localStorage.getItem("token");

//   //   if (!token) {
//   //     console.log("No token found! Redirecting to login...");
//   //     router.replace("/login");
//   //   } else {
//   //     setIsAuthenticated(true);
//   //   }

//   //   setLoading(false);
//   // }, []);

//   const handleFetchResults = async () => {
//     setFetching(true);
//     setError("");
//     setResults([]);

//     try {
//       const encodedRegNo = encodeURIComponent(regNo);
//       const res = await axios.get(
//         // `http://localhost:5000/getResults/CSE191`
//         `https://istiqamauni-1.onrender.com/getResults/${encodedRegNo}`
//         // `http://localhost:5000/getResults/${encodedRegNo}`
//       );
//       setResults(res.data.results);
//     } catch (err: any) {
//       setError(err?.response?.data?.error || "An error occurred.");
//     } finally {
//       setFetching(false);
//     }
//   };

//   if (loading || !isAuthenticated) return null;

//   return (
//     <div className="min-h-screen px-4 py-10 bg-gray-100 flex flex-col items-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">
//           Welcome to Your Dashboard
//         </h2>

//         <div className="space-y-4">
//           <input
//             type="text"
//             value={regNo}
//             onChange={(e) => setRegNo(e.target.value)}
//             placeholder="Enter your Registration Number"
//             className="w-full px-4 py-2 border rounded"
//           />

//           <button
//             onClick={handleFetchResults}
//             disabled={fetching || !regNo}
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//           >
//             {fetching ? "Fetching..." : "View My Results"}
//           </button>

//           {error && <p className="text-red-600">{error}</p>}
//         </div>
//       </div>

//       {results.length > 0 && (
//         <div className="mt-8 w-full max-w-3xl bg-white p-6 rounded shadow">
//           <h3 className="text-xl font-semibold mb-4">Your Uploaded Results</h3>
//           <ul className="space-y-4">
//             {results.map((result: any) => (
//               <li key={result._id} className="border-b pb-2">
//                 <p className="text-gray-800 font-medium">File: {result.fileName}</p>
//                 {/* <p className="text-gray-600 text-sm">Class: {result.classId?.name || "N/A"}</p> */}
//               <a
//   href={result.fileUrl}
//   className="text-blue-500 hover:underline"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Download Result
// </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentDashboard;
"use client";
import React, { useEffect, useState } from "react";

interface Result {
  createdAt: string;
  _id: string;
  fileName: string;
  fileUrl: string;
  fileType: string;
  uploadedAt?: string;
}

const StudentResultsPage = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const regNumber = localStorage.getItem("studentRegNumber");

    if (!regNumber) {
      console.error("No registration number found.");
      setLoading(false);
      return;
    }

    const fetchResults = async () => {
      try {
        const sanitized = regNumber.replace(/[^a-zA-Z0-9]/g, "");
        const res = await fetch(
          `http://localhost:5000/student/results/${sanitized}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("studentToken")}`,
            },
          }
        );

        const data = await res.json();
        if (Array.isArray(data)) {
          setResults(data);
        } else {
          setResults([]);
        }
      } catch (err) {
        console.error("Failed to fetch results", err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading results...</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        📄 My Results
      </h1>

      {results.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No results available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result) => (
            <div
              key={result._id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {result.fileName}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Uploaded on:{" "}
                  {(() => {
                    const dateStr = result.createdAt || result.uploadedAt;
                    return dateStr
                      ? new Date(dateStr).toLocaleDateString()
                      : "N/A";
                  })()}
                </p>
              </div>
              <a
                href={result.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Result
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentResultsPage;
