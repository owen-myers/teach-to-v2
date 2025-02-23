import "./styles/globals.css";
import Nav from "./nav";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <a href="/terms" className="flex font-karla justify-center p-12 text-sm text-gray-800">Terms</a>
      </body>
    </html>
    
  );
}
