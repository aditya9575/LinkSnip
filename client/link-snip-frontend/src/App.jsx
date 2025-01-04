import React from 'react'
import Header from './components/Header';
import URLForm from './components/URLForm';
import Features from './components/Features';
import Statistics from './components/Statistics';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                Shorten Your Links, Expand Your Reach
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Transform long URLs into memorable, shareable links in seconds with our powerful URL shortening service.
              </p>
            </div>

            <URLForm />
          </div>
        </section>

        <Features />
        <Statistics />
      </main>

      <Footer />
    </div>
  )
}

export default App
