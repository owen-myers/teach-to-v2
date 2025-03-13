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
                                <Link href="/profile" className={navLinkStyling}>
                                    {user.user_metadata?.full_name || user.email}
                                </Link>
                                <Link href="/private" className={getStartedButtonStyling}>
                                    Generator
                                    <span className="hidden sm:inline">&nbsp;&rarr;</span>
                                </Link>
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