import React from 'react';

const Career = () => {
  return (
    <div className="bg-slate-100 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-extrabold text-center text-slate-800 mb-6">
          Careers at Our Newspaper
        </h2>

        <p className="text-center text-slate-600 text-lg max-w-3xl mx-auto mb-12">
          Be a part of our passionate newsroom where truth, creativity,
          and innovation come together.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white border-l-4 border-indigo-600 rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              📝 Journalist
            </h3>
            <p className="text-slate-600 mb-2">
              Research and report impactful stories with accuracy and depth.
            </p>
            <p className="text-sm text-slate-500">
              Requirement: Strong writing & investigative skills
            </p>
          </div>

          <div className="bg-white border-l-4 border-rose-600 rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              ✏️ News Editor
            </h3>
            <p className="text-slate-600 mb-2">
              Edit content to maintain high editorial standards and clarity.
            </p>
            <p className="text-sm text-slate-500">
              Requirement: Editorial experience & attention to detail
            </p>
          </div>

          <div className="bg-white border-l-4 border-teal-600 rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              📸 Photographer
            </h3>
            <p className="text-slate-600 mb-2">
              Capture powerful images that tell real stories.
            </p>
            <p className="text-sm text-slate-500">
              Requirement: Photography skills & creative vision
            </p>
          </div>

          <div className="bg-white border-l-4 border-amber-600 rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              📢 Digital Marketer
            </h3>
            <p className="text-slate-600 mb-2">
              Grow audience reach through SEO, social media & campaigns.
            </p>
            <p className="text-sm text-slate-500">
              Requirement: Digital marketing & analytics knowledge
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
