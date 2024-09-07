import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AI-Driven Legal Research Engine</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-blue-700">Holmes</a>
          <nav className="space-x-6">
            <a href="#features" className="text-gray-700 hover:text-blue-700">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-700">How It Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-700">Pricing</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-700">Contact</a>
          </nav>
          <a href="#" className="bg-blue-700 text-white px-4 py-2 rounded-lg">Get Started</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-blue-700">AI-Powered Legal Intelligence</h1>
          <p className="mt-4 text-lg text-gray-600">
            Aggregate, analyze, and forecast legal outcomes with precision and speed.
          </p>
          <div className="mt-8">
            <a href="#" className="bg-blue-700 text-white px-6 py-3 rounded-lg text-lg">Try Now</a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            {/* Step 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-72">
              <h3 className="text-lg font-semibold text-blue-700">1. Input Case Details</h3>
              <p className="mt-2 text-gray-600">Submit case information to begin the analysis.</p>
            </div>
            {/* Step 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-72">
              <h3 className="text-lg font-semibold text-blue-700">2. AI Processing</h3>
              <p className="mt-2 text-gray-600">The AI aggregates and processes relevant legal data.</p>
            </div>
            {/* Step 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-72">
              <h3 className="text-lg font-semibold text-blue-700">3. Case Outcome Prediction</h3>
              <p className="mt-2 text-gray-600">Receive accurate forecasts of case outcomes based on AI analysis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Legal AI Engine. All rights reserved.</p>
          <div className="mt-6 space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
