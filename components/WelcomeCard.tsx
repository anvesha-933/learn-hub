import React from 'react';

// 1. Define what properties this card expects to receive
type WelcomeCardProps = {
  totalCourses: number;
  completedCourses: number;
  inProgressCourses: number;
};

// 2. Accept the statistics in the component function
export default function WelcomeCard({
  totalCourses,
  completedCourses,
  inProgressCourses,
}: WelcomeCardProps) {
  return (
    <div className="bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-700">
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back, Student! 👋
        </h1>
        <p className="text-slate-400 mb-6">
          Great job! You are making steady progress in your learning path. Keep up the momentum!
        </p>
      </div>

      {/* Dynamic Statistics Grid */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-700/50">
        <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-700">
          <p className="text-slate-400 text-xs uppercase tracking-wider font-medium">Total Courses</p>
          <p className="text-3xl font-bold text-white mt-1">{totalCourses}</p>
        </div>
        
        <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-700">
          <p className="text-slate-400 text-xs uppercase tracking-wider font-medium">In Progress</p>
          <p className="text-3xl font-bold text-blue-400 mt-1">{inProgressCourses}</p>
        </div>
        
        <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-700">
          <p className="text-slate-400 text-xs uppercase tracking-wider font-medium">Completed</p>
          <p className="text-3xl font-bold text-green-400 mt-1">{completedCourses}</p>
        </div>
      </div>
    </div>
  );
}

