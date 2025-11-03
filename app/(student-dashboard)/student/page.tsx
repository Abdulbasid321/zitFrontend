
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Book, CalendarCheck, ClipboardList, FileText, Megaphone } from "lucide-react";

// Types
interface Announcement {
  _id: string;
  title: string;
  message: string;
  createdAt: string;
}

export default function StudentDashboard() {
  const router = useRouter();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('studentToken');
    if (!token) {
      router.push('/login'); // Redirect if not authenticated
    } else {
      fetchAnnouncements();
    }
  }, [router]);

  const fetchAnnouncements = async () => {
    try {
      const res = await fetch("https://zitapi.onrender.com/announcements");
      // const res = await fetch("http://localhost:5000/announcements");
      const data = await res.json();
      setAnnouncements(data);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Welcome back, Student 👋</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card icon={<Book />} title="Registered Courses" value="6" />
        <Card icon={<FileText />} title="Total Units" value="18" />
        <Card icon={<ClipboardList />} title="GPA (Last Semester)" value="3.45" />
        <Card icon={<CalendarCheck />} title="Attendance" value="85%" />
      </div>


<div className="bg-white p-6 rounded-lg shadow">
  <h3 className="text-lg font-medium flex items-center gap-2 mb-4">
    <Megaphone className="text-orange-500" />
    Announcements
  </h3>

  {loading ? (
    <p className="text-gray-500">Loading announcements...</p>
  ) : announcements.length === 0 ? (
    <p className="text-gray-500">No announcements at the moment.</p>
  ) : (
    <ul className="space-y-4">
      {announcements.map((a) => (
        <li
          key={a._id}
          className="flex items-start gap-3 border-b border-gray-100 pb-3"
        >
          <span className="text-green-600 text-xl">📢</span>
          <div>
            <p className="font-semibold text-gray-800">{a.title}</p>
            <p className="text-sm text-gray-600 mt-1">{a.message}</p>
            <p className="text-xs text-gray-400 mt-1">
              {new Date(a.createdAt).toLocaleDateString()}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )}
</div>

    </div>
  );
}

function Card({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-all flex items-center gap-4">
      <div className="p-3 bg-green-100 text-green-600 rounded-full">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}
