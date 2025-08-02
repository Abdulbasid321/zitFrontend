'use client';

import React from 'react';

type Course = {
  id: string;
  name: string;
  lecturer: string;
  creditUnits: number;
};

const sampleCourses: Course[] = [
  { id: 'CS101', name: 'Introduction to Computer Science', lecturer: 'Dr. Jane Doe', creditUnits: 3 },
  { id: 'MATH201', name: 'Calculus II', lecturer: 'Prof. John Smith', creditUnits: 4 },
  { id: 'ENG150', name: 'English Literature', lecturer: 'Dr. Emily Clark', creditUnits: 2 },
  { id: 'PHY110', name: 'Physics I', lecturer: 'Dr. Albert Newton', creditUnits: 3 },
  { id: 'HIST301', name: 'Modern History', lecturer: 'Prof. Grace Lee', creditUnits: 3 },
];

const StudentCoursesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-green-900 mb-2">Your Courses This Semester</h1>
        <p className="text-green-700 text-lg">Check out your assigned courses with lecturers and credits</p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sampleCourses.map(({ id, name, lecturer, creditUnits }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
            role="button"
            tabIndex={0}
            aria-label={`Course ${name} taught by ${lecturer}, ${creditUnits} credit units`}
          >
            <h2 className="text-xl font-semibold text-green-800 mb-2">{name}</h2>
            <p className="text-green-600 mb-1">
              <span className="font-medium">Lecturer:</span> {lecturer}
            </p>
            <p className="text-green-600">
              <span className="font-medium">Credit Units:</span> {creditUnits}
            </p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default StudentCoursesPage;
