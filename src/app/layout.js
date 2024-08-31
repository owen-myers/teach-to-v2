import "./styles/globals.css";
import TeachToLogo from "./components/teachto-logo";


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
