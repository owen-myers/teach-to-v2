'use client';

import { useEffect, useState } from 'react';
import { getUser } from '../actions/getUser';
import { logout } from '../actions/logout';
import LoadingSpinner from '../components/loading-spinner';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (error) {
        console.error('Error loading user:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">
      <LoadingSpinner />
    </div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-lora font-bold text-gray-900 mb-6">Profile</h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-karla text-gray-700">Email</label>
              <p className="mt-1 text-lg font-karla text-gray-900">{user.email}</p>
            </div>
            <div className="pt-4">
              <form action={logout}>
                <button
                  type="submit"
                  className="hover:bg-red-100 border-2 border-red-500 text-red-500 font-karla py-2 px-4 rounded-lg transition duration-300"
                >
                  Log out
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 