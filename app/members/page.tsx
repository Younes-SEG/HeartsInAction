"use client";

import { useState } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";

interface Member {
  id: number;
  name: string;
  role: string;
  position?: string; // Specific title under the role (e.g. "VP External", "VP of Events", "Software Developer")
  year?: string;
  program?: string;
  bio?: string;
}

// Sample members data - replace with real data later
const sampleMembers: Member[] = [
  {
    id: 1,
    name: "John Doe",
    role: "President",
    year: "3rd Year",
    program: "Computer Science",
    bio: "Passionate about community service and making a difference.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Vice President",
    position: "VP External",
    year: "2nd Year",
    program: "Business",
    bio: "Loves connecting with the community and building partnerships.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Vice President",
    position: "VP of Events",
    year: "2nd Year",
    program: "Event Management",
    bio: "Passionate about organizing fundraisers and making every event count.",
  },
  {
    id: 4,
    name: "Younes",
    role: "Software Development",
    position: "Software Developer",
    year: "—",
    program: "—",
    bio: "Building and maintaining the Hearts in Action website.",
  },
  {
    id: 5,
    name: "Abdul",
    role: "Software Development",
    position: "Software Developer",
    year: "—",
    program: "—",
    bio: "Working on the club's digital presence.",
  },
];

export default function Members() {
  const [members] = useState<Member[]>(sampleMembers);

  // Group members by role
  const membersByRole = members.reduce((acc, member) => {
    if (!acc[member.role]) {
      acc[member.role] = [];
    }
    acc[member.role].push(member);
    return acc;
  }, {} as Record<string, Member[]>);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Our Members</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Meet the dedicated students who make Hearts in Action possible. We're always looking for
        new members to join our team!
      </p>

      {/* Executive Team */}
      {Object.entries(membersByRole).map(([role, roleMembers]) => (
        <div key={role} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary-600">{role}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roleMembers.map((member, index) => (
              <ScrollAnimation key={member.id} delay={index * 100}>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  {member.position && (
                    <p className="text-primary-600 font-medium text-sm uppercase tracking-wide mb-1">
                      {member.position}
                    </p>
                  )}
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{member.name}</h3>
                  {(member.program || member.year) && (member.program !== "—" || member.year !== "—") && (
                    <div className="text-gray-600 mb-3">
                      {member.program && member.program !== "—" && <div>{member.program}</div>}
                      {member.year && member.year !== "—" && <div className="text-sm">{member.year}</div>}
                    </div>
                  )}
                  {member.bio && (
                    <p className="text-gray-700 text-sm">{member.bio}</p>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      ))}

      {/* Join Us Section */}
      <div className="bg-gradient-to-br from-primary-600 to-pink-600 text-white rounded-lg p-8 mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
        <p className="text-lg mb-6 text-red-50">
          We're always looking for passionate students who want to make a difference. Whether you're
          interested in leadership roles or just want to get involved, we'd love to have you!
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
