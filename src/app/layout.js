import "./styles/globals.css";
import Nav from "./nav";

export const metadata = {
  title: "TeachTo",
  description: "Goal-writing assistant for IEPs and 504s",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
    
  );
}
