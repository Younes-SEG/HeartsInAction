"use client";

import { useState } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";

interface FundraisingGoal {
  id: number;
  name: string;
  current: number;
  target: number;
  description: string;
  deadline?: string;
}

// Sample fundraising goals - replace with real data later
const sampleGoals: FundraisingGoal[] = [
  {
    id: 1,
    name: "Spring 2026 Campaign",
    current: 0,
    target: 5000,
    description: "Our main fundraising goal for the spring semester",
    deadline: "2026-04-30",
  },
  {
    id: 2,
    name: "Food Bank Support",
    current: 2500,
    target: 10000,
    description: "Supporting local food banks in the Ottawa area",
  },
];

export default function Fundraising() {
  const [goals] = useState<FundraisingGoal[]>(sampleGoals);

  const totalRaised = goals.reduce((sum, goal) => sum + goal.current, 0);
  const totalTarget = goals.reduce((sum, goal) => sum + goal.target, 0);
  const overallProgress = totalTarget > 0 ? (totalRaised / totalTarget) * 100 : 0;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Fundraising</h1>

      {/* Overall Stats */}
      <div className="bg-gradient-to-br from-primary-600 to-pink-600 text-white rounded-lg p-8 mb-12 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Overall Progress</h2>
        <div className="text-center mb-6">
          <div className="text-5xl font-bold mb-2">
            ${totalRaised.toLocaleString()}
          </div>
          <div className="text-xl text-red-100">
            of ${totalTarget.toLocaleString()} goal
          </div>
        </div>
        <div className="w-full bg-red-800 rounded-full h-4 mb-2">
          <div
            className="bg-white h-4 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(overallProgress, 100)}%` }}
          ></div>
        </div>
        <div className="text-center text-red-100">
          {overallProgress.toFixed(1)}% Complete
        </div>
      </div>

      {/* Individual Goals */}
      <div className="space-y-6 mb-12">
        <h2 className="text-3xl font-semibold mb-6">Current Campaigns</h2>
        {goals.map((goal, index) => {
          const progress = (goal.current / goal.target) * 100;
          return (
            <ScrollAnimation key={goal.id} delay={index * 150}>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary-600 mb-2">{goal.name}</h3>
                    <p className="text-gray-700">{goal.description}</p>
                  </div>
                  {goal.deadline && (
                    <div className="mt-4 md:mt-0 md:text-right">
                      <span className="text-sm text-gray-500">Deadline:</span>
                      <div className="font-medium text-gray-700">{formatDate(goal.deadline)}</div>
                    </div>
                  )}
                </div>
                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold text-gray-700">
                      ${goal.current.toLocaleString()}
                    </span>
                    <span className="text-lg font-semibold text-gray-700">
                      ${goal.target.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-primary-600 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-right mt-2 text-gray-600">
                    {progress.toFixed(1)}% Complete
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          );
        })}
      </div>

      {/* How to Donate */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">How to Contribute</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollAnimation delay={0}>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-primary-600">Attend Our Events</h3>
              <p className="text-gray-700">
                Join us at our fundraising events throughout the year. Your participation helps us
                reach our goals!
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-primary-600">Direct Donations</h3>
              <p className="text-gray-700">
                Contact us to learn more about making a direct donation to support our causes.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-primary-600">Volunteer</h3>
              <p className="text-gray-700">
                Your time and effort are just as valuable! Volunteer at our events and help us make
                a difference.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={300}>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-primary-600">Spread the Word</h3>
              <p className="text-gray-700">
                Share our events and campaigns with friends, family, and on social media. Every
                share helps!
              </p>
            </div>
          </ScrollAnimation>
        </div>
        <div className="text-center mt-6">
          <a
            href="/contact"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Contact Us to Get Involved
          </a>
        </div>
      </div>
    </div>
  );
}
