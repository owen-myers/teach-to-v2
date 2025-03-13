'use client';

import GenButton from "./components/generate-button";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import FrontPageTeacher from "../../public/Teacher student amico.svg";

export default function Home() {
  const router = useRouter();

  const cardStyle = "p-6 rounded-xl shadow-md border border-sm";

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-lora text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
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
              width={500}
              height={500}
              priority
              className="w-full max-w-md"
            />
          </div>
        </div>

        {/* Feature section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={cardStyle}>
            <h3 className="text-lg font-semibold font-lora text-gray-900 mb-2">
              Quick Generation
            </h3>
            <p className="font-karla text-gray-600">
              Create comprehensive IEP goals in minutes, not hours
            </p>
          </div>
          
          <div className={cardStyle}>
            <h3 className="text-lg font-semibold font-lora text-gray-900 mb-2">
              Personalized Goals
            </h3>
            <p className="font-karla text-gray-600">
              Tailored to each student's unique learning needs
            </p>
          </div>
          
          <div className={cardStyle}>
            <h3 className="text-lg font-semibold font-lora text-gray-900 mb-2">
              Professional Standards
            </h3>
            <p className="font-karla text-gray-600">
              Aligned with educational best practices and standards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
