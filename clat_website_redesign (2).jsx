

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';

function CoursePage() {
  const { courseId } = useParams();
  const readableTitle = courseId.replace(/-/g, ' ');
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{readableTitle}</h1>
      <p className="mb-4">Detailed information about the {readableTitle} will be displayed here, including syllabus, schedule, instructors, and FAQs.</p>
      <Button as={Link} to="/" className="bg-blue-600 text-white">Back to Home</Button>
    </div>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md p-4 text-center text-2xl font-bold">
        CLAT NLTI Coaching
      </header>

      {/* Hero Section */}
      <section className="p-6 text-center bg-blue-100">
        <h1 className="text-4xl font-bold mb-2">Prepare for CLAT 2026 with Confidence</h1>
        <p className="text-lg mb-4">Join our expert-led coaching programs tailored to help you succeed.</p>
        <Button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Explore Courses</Button>
      </section>

      {/* Course Cards */}
      <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {["Crash Course 2026", "Target Batch", "Weekend Program"].map((course, index) => (
          <Card key={index} className="shadow">
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">{course}</h2>
              <p className="mb-4">Live sessions, mock tests, mentorship & more</p>
              <Button as={Link} to={`/course/${course.replace(/\s+/g, '-')}`} className="bg-green-600 text-white">View Course</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Crash Course Inquiry Form using FormSubmit */}
      <section className="p-6 bg-yellow-100">
        <h2 className="text-2xl font-bold text-center mb-4">CLAT Crash Course 2026 – Enroll Now</h2>
        <form 
          action="https://formsubmit.co/goluv1817@gmail.com" 
          method="POST"
          className="max-w-xl mx-auto bg-white p-4 rounded shadow space-y-4"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="name" placeholder="Full Name" className="w-full border p-2 rounded" required />
          <input type="email" name="email" placeholder="Email" className="w-full border p-2 rounded" required />
          <input type="tel" name="phone" placeholder="Phone Number" className="w-full border p-2 rounded" required />
          <textarea name="message" placeholder="Message / Query" className="w-full border p-2 rounded" rows="3" />
          <Button type="submit" className="bg-blue-600 text-white">Submit Inquiry</Button>
        </form>
      </section>

      {/* Demo Videos */}
      <section className="p-6 bg-white">
        <h2 className="text-2xl font-bold text-center mb-4">Demo Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-w-16 aspect-h-9">
            <iframe className="w-full h-64" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Demo Video 1" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe className="w-full h-64" src="https://www.youtube.com/embed/9bZkp7q19f0" title="Demo Video 2" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="p-6 bg-white">
        <h2 className="text-2xl font-bold text-center mb-4">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="shadow">
            <CardContent>
              <p>"Thanks to NLTI, I cracked CLAT with AIR 42! The mocks and mentorship were excellent."</p>
              <p className="mt-2 font-semibold">– Aakash Sharma</p>
            </CardContent>
          </Card>
          <Card className="shadow">
            <CardContent>
              <p>"The crash course was intense and well-structured. Definitely worth it!"</p>
              <p className="mt-2 font-semibold">– Riya Malhotra</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4 mt-4">
        © 2024 CLAT NLTI. All rights reserved.
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
      </Routes>
    </Router>
  );
}
