import React from 'react';

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-4xl font-extrabold text-center text-slate-800 mb-6">
          About Our Newspaper
        </h2>

        <p className="text-center text-slate-600 text-lg max-w-3xl mx-auto mb-12">
          We are a modern digital newspaper committed to delivering
          trustworthy, unbiased, and timely news to our readers around
          the globe.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white border-t-4 border-red-600 rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              📰 Our Mission
            </h3>
            <p className="text-slate-600">
              To inform society with factual reporting and responsible
              journalism that builds public trust.
            </p>
          </div>

          <div className="bg-white border-t-4 border-blue-600 rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              🌍 Our Vision
            </h3>
            <p className="text-slate-600">
              To become a globally respected digital news platform
              shaping informed communities.
            </p>
          </div>

          <div className="bg-white border-t-4 border-emerald-600 rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              ⚖️ Our Values
            </h3>
            <p className="text-slate-600">
              Integrity, fairness, innovation, and ethical journalism
              guide everything we publish.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
