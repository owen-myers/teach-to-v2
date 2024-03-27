import TeachToLogo from './components/teachto-logo.js';
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TeachToLogo />
        {children}
      </body>
    </html>
    
  );
}
