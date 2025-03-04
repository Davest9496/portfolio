import Footer from '@/components/footer';
import React from 'react';

interface ProjectsProp {
  id: number;
  title: string;
  image: string;
  details: string[];
  tools: string[]
}

function page() {
  return (
    <main className="px-50 mt-35">
      <h1 className="capitalize text-theme text-5xl font-extrabold mb-10 opacity-50">
        featured projects.
      </h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 text-right text-theme text-5xl font-extrabold opacity-50">01</div>
        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-200 col-span-1">Part 1</div>
          <div className="bg-gray-300 col-span-2">Part 2</div>
          </div>
          <Footer/>
        </div>
      </div>
    </main>
  );
}

export default page