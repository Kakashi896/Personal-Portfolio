import React, { Suspense, lazy } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';

const Projects = lazy(() => import('./Projects'));
const Contact = lazy(() => import('./Contact'));

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-[50vh] px-4">
        <Hero />
        <About />
        <Suspense fallback={<p className="text-center mt-10">Loading Projects...</p>}>
          <Projects />
          <Contact />
        </Suspense>
      </main>
    </>
  );
};

export default Home;
