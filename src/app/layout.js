import "./styles/globals.css";
import Nav from "./nav";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <div className="flex justify-center pt-12 pb-4">
          <a href="/terms" className="font-karla text-sm text-gray-800">Terms</a>
        </div>
        <div className="flex justify-center pb-4">
          <p className="font-karla text-gray-500 text-xs">TeachTo can make mistakes. Always check important information!</p>
        </div>
      </body>
    </html>
    
  );
}
