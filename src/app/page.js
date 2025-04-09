'use client';

import GenButton from "./components/generate-button";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import FrontPageTeacher from "../../public/TeachTo_Mockup.svg";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-8 py-16 sm:px-6 md:px-8 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-lora text-4xl md:text-5xl lg:text-6xl mb-6">
              Generate IEP or 504 goals in just three clicks
            </h1>
            <p className="font-karla text-xl text-gray-600 mb-8 max-w-2xl">
              TeachTo uses your expert guidance to suggest simple and measurable IEP and 504 goals
            </p>
            <GenButton 
              onClick={() => router.push('/login')}
              customStyles="bg-violet-500 text-white text-lg font-karla px-8 py-4 
                transition-colors duration-300 hover:bg-violet-600">
              Try it for free
            </GenButton>
          </div>

          {/* Right side image */}
          <div className="flex-1 flex justify-center">
            <Image
              src={FrontPageTeacher}
              alt="Teacher helping a student"
              width={800}
              height={600}
              priority
              className="w-full max-w-lg"
            />
          </div>
        </div>

        {/* Feature section - Redesigned with purple theme */}
        <div className="mt-24 bg-violet-300 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-lora text-center mb-12 text-violet-900">Simple, free, and secure goal-generating</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-violet-100">
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold font-lora text-violet-900 mb-2">
                Generate quickly
              </h3>
              <p className="font-karla text-gray-600">
                Create comprehensive IEP goals in minutes, not hours
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-violet-100">
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold font-lora text-violet-900 mb-2">
                No data recorded
              </h3>
              <p className="font-karla text-gray-600">
                Data is not stored or shared with anyone
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-violet-100">
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold font-lora text-violet-900 mb-2">
                Aligned with standards
              </h3>
              <p className="font-karla text-gray-600">
                Measurable, achievable, and tailored to each student
              </p>
            </div>
          </div>
        </div>
        
        {/* Call-to-action button - Separated from feature section */}
        <div className="mt-20 text-center">
          <GenButton 
            onClick={() => router.push('/login')}
            customStyles="bg-violet-500 text-white text-lg font-karla px-8 py-4 
              transition-colors duration-300 hover:bg-violet-600">
            Generate a goal in 15 seconds &rarr;
          </GenButton>
        </div>
      </div>
    </div>
  );
}
