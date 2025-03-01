
import TeachToLogo from "./components/teachto-logo";

const navLinkStyling = "mr-3 sm:mr-8 transition-colors font-karla duration-300 ease-in-out hover:text-gray-500 focus:text-gray-500 active:text-gray-500";

export default function Nav() {
    return (
        <div>
            <nav className="font-karla subpixel-antialiased py-8 sm:pl-14 pr-14 flex justify-between items-center">
                <div>
                <TeachToLogo />
                </div>
                <div className="font-karla text-md space-x-4">
                <a href="/">Sign up</a>
                <a href="/">Log in</a>
                </div>
            </nav>
        </div>
    );
};