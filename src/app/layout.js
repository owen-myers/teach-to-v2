import "./styles/globals.css";
import Nav from "./nav";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <div className="flex justify-center p-12">
          <a href="/terms" className="font-karla text-sm text-gray-800">Terms</a>
        </div>
      </body>
    </html>
    
  );
}
