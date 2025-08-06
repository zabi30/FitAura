export default function TransformationPlan() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          6-Week Budget-Friendly Pakistani Transformation Plan
        </h1>

        {/* Introduction */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            This 6-week plan is optimized for a Pakistani lifestyle using affordable, 
            home-cooked foods. It combines Intermittent Fasting, local meals, gym workouts, 
            and posture correction exercises to reduce fat, slim the hips, and build a more 
            masculine upper body.
          </p>
        </section>

        {/* 1. Diet Plan */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            1. Diet Plan (Intermittent Fasting & Affordable)
          </h2>
          <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
            <li>Optional Fasting: 14–16 hours (e.g., 8 PM to 12 PM next day)</li>
            <li>Water: 2.5–3 liters/day</li>
            <li>Green Tea: 30 min after lunch and evening before dinner</li>
          </ul>

          <h3 className="font-semibold text-gray-700">Meal Plan:</h3>
          <div className="mt-2 space-y-3 text-gray-600">
            <div>
              <strong>12:00 PM (First Meal / Lunch)</strong>
              <ul className="list-disc pl-5">
                <li>1–2 whole wheat chapati</li>
                <li>Seasonal sabzi (tori, lauki, bhindi, gobi, palak, karela)</li>
                <li>Small bowl daal (moong/masoor)</li>
                <li>Salad: cucumber, tomato, onion, lemon</li>
                <li>(Chicken/beef only 2–3 times a week if affordable)</li>
              </ul>
            </div>
            <div>
              <strong>3:30–4:00 PM (Snack)</strong>
              <ul className="list-disc pl-5">
                <li>1 boiled egg OR 1 fruit (apple/guava/papaya) OR 1 cup plain dahi</li>
              </ul>
            </div>
            <div>
              <strong>7:30 PM (Dinner)</strong>
              <ul className="list-disc pl-5">
                <li>1 chapati with daal + sabzi combo</li>
                <li>Daal: moong, masoor (light); chana occasionally</li>
                <li>Avoid rice at night</li>
                <li>Use less oil, more tomato/onion for flavor</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2. Weekly Gym & Exercise Plan */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            2. Weekly Gym & Exercise Plan
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-600">
            <div>
              <strong>Day 1: Chest + Core</strong>
              <ul className="list-disc pl-5">
                <li>Bench press / push-ups – 4×12</li>
                <li>Dumbbell fly – 3×12</li>
                <li>Plank – 3×30 sec</li>
                <li>Reverse crunch – 3×15</li>
              </ul>
            </div>
            <div>
              <strong>Day 2: Back + Cardio</strong>
              <ul className="list-disc pl-5">
                <li>Lat pull-down – 4×12</li>
                <li>Dumbbell rows – 3×12</li>
                <li>20 min treadmill or cycling</li>
              </ul>
            </div>
            <div>
              <strong>Day 3: Legs + Glutes + Core</strong>
              <ul className="list-disc pl-5">
                <li>Squats – 4×15</li>
                <li>Lunges – 3×12 each leg</li>
                <li>Glute bridges – 3×15</li>
                <li>Side plank – 3×20 sec per side</li>
              </ul>
            </div>
            <div>
              <strong>Day 4: Shoulders + Arms</strong>
              <ul className="list-disc pl-5">
                <li>Shoulder press – 4×12</li>
                <li>Dumbbell lateral raise – 3×12</li>
                <li>Bicep curls & tricep extensions – 3×12 each</li>
              </ul>
            </div>
            <div>
              <strong>Day 5: Full Body + HIIT Cardio</strong>
              <ul className="list-disc pl-5">
                <li>Circuit: squats + push-ups + burpees × 4 rounds</li>
                <li>15 min HIIT (30 sec sprint + 1 min walk)</li>
              </ul>
            </div>
            <div>
              <strong>Day 6: Core & Mobility</strong>
              <ul className="list-disc pl-5">
                <li>Hanging leg raises – 3×10</li>
                <li>Russian twists – 3×15</li>
                <li>Hip flexor stretches & cat-cow</li>
              </ul>
            </div>
            <div>
              <strong>Day 7: Rest / Light Walk</strong>
            </div>
          </div>
        </section>

        {/* 3. Posture & Lifestyle Tips */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            3. Posture & Lifestyle Tips
          </h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Stretch hip flexors daily (lunging stretch 30 sec per leg)</li>
            <li>Strengthen core & glutes (planks, glute bridges, bird-dogs)</li>
            <li>Stand/walk 5 min every hour</li>
            <li>Sleep 7–8 hrs</li>
            <li>Avoid alcohol & minimize cheat meals</li>
          </ul>
        </section>

        {/* 4. Expected Results */}
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            4. Expected 6-Week Results
          </h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>5–7 kg fat loss</li>
            <li>Noticeable waist & hip reduction</li>
            <li>Improved posture & masculine upper body</li>
            <li>More energy & better metabolism</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
