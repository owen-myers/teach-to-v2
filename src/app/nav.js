
import TeachToLogo from "./components/teachto-logo";

const navLinkStyling = "mr-8 transition-colors font-karla duration-300 ease-in-out hover:text-gray-500 focus:text-gray-500 active:text-gray-500";
const getStartedButtonStyling = "bg-blue-500 hover:bg-blue-700 text-white font-karla py-2 px-4 rounded-2xl transition duration-300"

export default function Nav() {
    return (
        <div>
            <nav className="py-8 pr-6 sm:pl-14 sm:pr-14 flex justify-between items-center">
                <div>
                <TeachToLogo />
                </div>
                <div className="sm:pr-8">
                <a href="/login" className={navLinkStyling}>Log in</a>
                <a href="/login" className={getStartedButtonStyling}>Get started &rarr;</a>
                </div>
            </nav>
        </div>
    );
};