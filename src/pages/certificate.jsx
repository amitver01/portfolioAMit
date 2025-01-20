import React from "react";

const Certification = () => {
  return (
    <section id="certification" className="py-12 bg-zinc-900">
      <div className="container mx-auto px-6">
        <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 mt-10'>
          Certifications
        </h2>
        <div className="flex justify-center">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
            <blockquote
              className="badgr-badge"
              style={{
                fontFamily: "Helvetica, Roboto, 'Segoe UI', Calibri, sans-serif",
              }}
            >
              <a
                href="https://api.badgr.io/public/assertions/CMtoHT3xR6KFuFDG7pE0Cw?identity__email=av2177980%40gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="mx-auto mb-4"
                  width="120px"
                  height="120px"
                  src="https://api.badgr.io/public/assertions/CMtoHT3xR6KFuFDG7pE0Cw/image"
                  alt="Postman API Fundamentals Student Expert Badge"
                />
              </a>
              <p className="text-lg font-semibold text-gray-700">
                Postman API Fundamentals Student Expert
              </p>
              <p className="text-sm text-gray-500 mt-2">
                <strong>Awarded:</strong> Jan 20, 2025
              </p>
              <a
                className="inline-block mt-4 text-sm font-bold text-blue-600 border border-blue-600 rounded px-4 py-2 hover:bg-blue-600 hover:text-white transition duration-200"
                href="https://badgecheck.io?url=https%3A%2F%2Fapi.badgr.io%2Fpublic%2Fassertions%2FCMtoHT3xR6KFuFDG7pE0Cw%3Fidentity__email%3Dav2177980%2540gmail.com&amp;identity__email=av2177980%40gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify
              </a>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
