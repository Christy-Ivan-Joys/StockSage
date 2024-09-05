import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to StockSage</h1>
        <p className="text-xl text-gray-700">
          Your go-to platform for real-time stock data and advanced market analytics.
        </p>
      </header>

      <section className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Features</h2>
        <ul className="list-disc pl-5 space-y-3 text-gray-600">
          <li className="flex items-start">
            <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m1 6H5a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2z"></path></svg>
            Real-Time Stock Prices: Stay updated with the latest stock prices and market trends.
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l7-7M5 12l7 7"></path></svg>
            Historical Data Analysis: Analyze past stock performance and trends using advanced algorithms.
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.746 4.8l2.773-2.774A2.992 2.992 0 0116.8 2a2.992 2.992 0 012.775 2.775l2.774 2.773m-1.573 7.812a4.992 4.992 0 010-8.55m-2.444 1.63a4.992 4.992 0 011.062 3.019M5.23 19.04a2.992 2.992 0 00-.505-4.366l-2.773-2.774m2.278 7.812a4.992 4.992 0 01-1.062-3.019m15.988 4.4a4.992 4.992 0 01-3.019-1.062m-3.19-2.278l2.774-2.774a2.992 2.992 0 00-.505-4.366"></path></svg>
            Intuitive User Interface: Easily navigate and interact with the application to get the information you need.
          </li>
        </ul>
      </section>

      <footer className="mt-10 text-center">
        <p className="text-gray-600">
          <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a> to get started with StockSage today!
        </p>
      </footer>
    </div>
  );
};

export default Home