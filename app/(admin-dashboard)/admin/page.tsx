"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  GraduationCap,
  BookOpen,
  Megaphone,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Stats {
  totalUsers: number;
  totalDepartments: number;
  totalCourses: number;
  totalAnnouncements: number;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats>({
    totalUsers: 0,
    totalDepartments: 0,
    totalCourses: 0,
    totalAnnouncements: 0,
  });

  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.replace("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/admin/stats");
        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) return <p className="text-center py-10">Loading dashboard...</p>;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 space-y-8">
      {/* Header and Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Welcome Admin
        </h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700">
                Create Announcement
              </Button>
            </DialogTrigger>
            <DialogContent className="space-y-4">
              <h2 className="text-lg font-semibold">New Announcement</h2>
              <Input placeholder="Title" />
              <Textarea placeholder="Write your message here..." />
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Submit
              </Button>
            </DialogContent>
          </Dialog>
          <Button variant="outline">Join Chat Forum</Button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          title="Users"
          value={stats.totalUsers}
          icon={<Users className="text-green-600 h-5 w-5" />}
          color="bg-green-50"
        />
        <StatCard
          title="Departments"
          value={stats.totalDepartments}
          icon={<GraduationCap className="text-blue-600 h-5 w-5" />}
          color="bg-blue-50"
        />
        <StatCard
          title="Courses"
          value={stats.totalCourses}
          icon={<BookOpen className="text-purple-600 h-5 w-5" />}
          color="bg-purple-50"
        />
      </div>

      {/* Feature Card: Announcements */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="bg-orange-50 shadow-sm">
          <CardHeader className="flex items-center gap-3">
            <Megaphone className="h-5 w-5 text-orange-500" />
            <CardTitle className="text-base text-gray-700">
              Announcements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-gray-900">
              {stats.totalAnnouncements}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
  color,
}: {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <Card className={`${color} shadow-sm`}>
      <CardHeader className="flex items-center gap-3">
        {icon}
        <CardTitle className="text-base text-gray-700">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </CardContent>
    </Card>
  );
}
