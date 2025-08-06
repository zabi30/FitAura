import React, { useState, useEffect } from "react";

const habits = [
  "Gym/Workout",
  "Steps 8k+",
  "Posture/Stretching",
  "Intermittent Fasting",
  "Lunch OK",
  "Dinner OK",
  "Water 2.5L",
  "Salad/Fruit",
  "Morning Skincare",
  "Night Skincare",
  "Sleep 7-8h",
  "Sunlight 15min",
  "Meditation 10min"
];

const weeksCount = 6;
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function GlowUpTracker() {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem("glowUpProgress");
    return saved
      ? JSON.parse(saved)
      : Array.from({ length: weeksCount }, () =>
          Array.from({ length: 7 }, () => Array(habits.length).fill(false))
        );
  });

  useEffect(() => {
    localStorage.setItem("glowUpProgress", JSON.stringify(progress));
  }, [progress]);

  const toggleCheck = (weekIndex, dayIndex, habitIndex) => {
    const newProgress = [...progress];
    newProgress[weekIndex][dayIndex][habitIndex] =
      !newProgress[weekIndex][dayIndex][habitIndex];
    setProgress(newProgress);
  };

  const calculateWeekProgress = (weekIndex) => {
    const weekData = progress[weekIndex].flat();
    const completed = weekData.filter(Boolean).length;
    const total = weekData.length;
    return Math.round((completed / total) * 100);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">
        6-Week Glow Up Tracker
      </h1>

      {[...Array(weeksCount)].map((_, weekIndex) => (
        <div
          key={weekIndex}
          className="mb-12 bg-white shadow-md rounded-xl p-4 border border-gray-200"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-blue-600">
              Week {weekIndex + 1}
            </h2>
            <span className="text-sm font-medium text-gray-700">
              Progress: {calculateWeekProgress(weekIndex)}%
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-gray-300 px-2 py-1">Day</th>
                  {habits.map((habit, i) => (
                    <th
                      key={i}
                      className="border border-gray-300 px-2 py-1 text-[12px] min-w-[90px]"
                    >
                      {habit}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {days.map((day, dayIndex) => (
                  <tr key={dayIndex} className="even:bg-gray-50">
                    <td className="border border-gray-300 px-2 py-1 font-medium text-center">
                      {day}
                    </td>
                    {habits.map((_, habitIndex) => (
                      <td
                        key={habitIndex}
                        className="border border-gray-300 text-center"
                      >
                      <input
  type="checkbox"
  checked={progress[weekIndex][dayIndex][habitIndex]}
  onChange={() => toggleCheck(weekIndex, dayIndex, habitIndex)}
  disabled={progress[weekIndex][dayIndex][habitIndex]} // ✅ disable after first tick
  className="h-4 w-4 accent-blue-500 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
/>

                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
