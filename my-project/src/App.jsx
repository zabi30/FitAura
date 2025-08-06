import { useState } from "react";
import GlowUpTracker from "./GlowUpTracker";
import TransformationPlan from "./TransformationPlan";

export default function GlowUpApp() {
  const [showPlan, setShowPlan] = useState(false);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Toggle Box */}
        <div
          className="mb-6 p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => setShowPlan(!showPlan)}
        >
          <h2 className="text-xl font-bold text-center">
            📋 View 6-Week Transformation Plan
          </h2>
          <p className="text-sm text-center opacity-80 mt-1">
            Click to {showPlan ? "hide" : "view"} your full diet & workout guide
          </p>
        </div>

        {/* Collapsible Plan */}
        {showPlan && (
          <div className="mb-8 animate-fadeIn">
            <TransformationPlan />
          </div>
        )}

        {/* Glow Up Tracker */}
        <GlowUpTracker />
      </div>
    </div>
  );
}
