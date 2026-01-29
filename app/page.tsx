"use client";

import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
      {/* Hero Section */}
      <section id="home" className="snap-start w-full h-screen bg-gradient-to-br from-primary-600 to-pink-600 text-white flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollAnimation>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hearts in Action
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-50">
              University of Ottawa
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Making a difference in our community through fundraising, events, and meaningful action.
              Join us in spreading kindness and creating positive change.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/events"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                View Events
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Quick Stats */}
      <section id="stats" className="snap-start w-full h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={0}>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary-600 mb-2">$0</div>
                <div className="text-gray-600">Funds Raised</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary-600 mb-2">0</div>
                <div className="text-gray-600">Events Hosted</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary-600 mb-2">0</div>
                <div className="text-gray-600">Active Members</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="about" className="snap-start w-full h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation delay={0}>
              <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary-600">Fundraising</h3>
                <p className="text-gray-700">
                  We organize various fundraising events throughout the year to support causes that matter.
                  From bake sales to charity runs, every contribution makes a difference.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary-600">Community Engagement</h3>
                <p className="text-gray-700">
                  We connect with our local community, building relationships and creating opportunities
                  for students to make a positive impact.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary-600">Awareness</h3>
                <p className="text-gray-700">
                  We raise awareness about important causes and issues, educating our community and
                  inspiring action.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary-600">Volunteer Opportunities</h3>
                <p className="text-gray-700">
                  We provide opportunities for students to volunteer, develop leadership skills, and
                  contribute to meaningful causes.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="snap-start w-full h-screen bg-primary-600 text-white flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-lg mb-8 text-red-50">
              Join Hearts in Action and be part of something meaningful. Together, we can create positive change.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Contact Us
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
