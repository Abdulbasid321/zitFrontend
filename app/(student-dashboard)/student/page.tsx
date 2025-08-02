// app/(dashboard)/student/page.tsx
"use client";
import { Book, CalendarCheck, ClipboardList, FileText } from "lucide-react";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function StudentDashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('studentToken');

    if (!token) {
      router.push('/login'); // If no token, send back to login
    }
  }, [router])
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

      {/* Quick Links or Announcements */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-2">Announcements</h3>
        <ul className="list-disc ml-5 text-gray-700 space-y-2">
          <li>Course registration closes on Sept 30th.</li>
          <li>Mid-semester tests start Oct 15th.</li>
        </ul>
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
