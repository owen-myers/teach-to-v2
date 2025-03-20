'use client';

import { useEffect, useState } from "react";
import TeachToLogo from "./components/teachto-logo";
import { getUser } from "./actions/getUser";
import Link from "next/link";

const navLinkStyling = "transition-colors font-karla duration-300 ease-in-out hover:text-gray-500";
const getStartedButtonStyling = "bg-violet-500 hover:bg-violet-600 text-white font-karla py-2 px-4 rounded-lg transition duration-300";

export default function Nav() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    return (
        <>
            <div className="w-full">
                <nav className="py-4 px-4 sm:py-6 sm:px-8 md:px-14 flex justify-between items-center">
                    <div>
                        <TeachToLogo />
                    </div>
                    <div className="flex items-center gap-3 sm:gap-6">
                        {isLoading ? (
                            <div className="w-6 h-6 border-2 border-t-transparent border-gray-400 rounded-full animate-spin"></div>
                        ) : user ? (
                            <>
                                {/* Desktop Navigation */}
                                <div className="hidden sm:flex items-center gap-3 sm:gap-6">
                                    <Link href="/profile" className={navLinkStyling}>
                                        {user.user_metadata?.full_name || user.email}
                                    </Link>
                                    <Link href="/private" className={getStartedButtonStyling}>
                                        Generator
                                        <span className="hidden sm:inline">&nbsp;&rarr;</span>
                                    </Link>
                                </div>
                                
                                {/* Mobile Navigation */}
                                <div className="sm:hidden">
                                    <button
                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                        className="p-2 rounded-lg hover:bg-gray-100"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            {isMobileMenuOpen ? (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            ) : (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                />
                                            )}
                                        </svg>
                                    </button>
                                    
                                    {isMobileMenuOpen && (
                                        <div className="absolute right-4 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                                            <Link
                                                href="/profile"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-karla"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {user.user_metadata?.full_name || user.email}
                                            </Link>
                                            <Link
                                                href="/private"
                                                className="block px-4 py-2 text-sm text-violet-600 hover:bg-gray-100 font-karla"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Generator
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className={navLinkStyling}>
                                    Log in
                                </Link>
                                <Link href="/login" className={getStartedButtonStyling}>
                                    Get started
                                    <span className="hidden sm:inline">&nbsp;&rarr;</span>
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </div>
        </>
    );
}