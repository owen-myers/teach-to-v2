'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to Teach-to
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your personal teaching assistant platform. Sign in to start creating and managing your lessons.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => router.push('/login')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Sign In to Get Started
          </button>
          
          <div className="text-sm text-gray-500 mt-4">
            New to Teach-to?{' '}
            <Link href="/auth/register" className="text-blue-600 hover:text-blue-800 font-medium">
              Create an account
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Personalized Learning
            </h3>
            <p className="text-gray-600">
              Create customized lesson plans tailored to your teaching style
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Track Progress
            </h3>
            <p className="text-gray-600">
              Monitor student engagement and learning outcomes
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Collaborative Tools
            </h3>
            <p className="text-gray-600">
              Share resources and interact with other educators
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
