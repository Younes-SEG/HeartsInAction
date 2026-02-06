"use client";

import { useState } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission (e.g., send to API or email service)
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-center text-gray-600 mb-12">
        Have questions? Want to get involved? We'd love to hear from you!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-primary-600">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 text-gray-800">Email</h3>
              <a
                href="mailto:heartsinactionuo@gmail.com"
                className="text-primary-600 hover:underline"
              >
                heartsinactionuo@gmail.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800">University</h3>
              <p className="text-gray-700">University of Ottawa</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800">Social Media</h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  Follow us on Instagram:{" "}
                  <a href="https://www.instagram.com/hia.uottawa/" className="text-red-600 hover:underline">
                    @hia.uottawa
                  </a>
                </p>
                <p className="text-gray-700">
                  Connect on Facebook:{" "}
                  <a href="#" className="text-red-600 hover:underline">
                    Hearts in Action UOttawa
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-red-50 rounded-lg">
            <h3 className="font-semibold mb-2 text-primary-700">Meeting Times</h3>
            <p className="text-gray-700">
              We typically meet weekly during the semester. Contact us for current meeting
              schedules and locations.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-primary-600">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="join">I want to join</option>
                <option value="volunteer">Volunteer opportunities</option>
                <option value="donate">Donation inquiry</option>
                <option value="event">Event information</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
