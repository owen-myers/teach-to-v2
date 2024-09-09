import "./styles/globals.css";
import TeachToLogo from "./components/teachto-logo";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TeachToLogo />
        {children}
        <a href="/terms" className="flex font-body justify-center p-4 text-sm text-gray-800">Terms</a>
      </body>
    </html>
    
  );
}
