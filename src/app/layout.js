import "./styles/globals.css";
import Nav from "./nav";

export const metadata = {
  title: "TeachTo - IEP & 504 Goal-Writing Assistant",
  description: "Generate comprehensive IEP and 504 goals quickly and efficiently. TeachTo helps educators create measurable, achievable goals tailored to each student's needs.",
  keywords: ["IEP goals", "504 plans", "special education", "goal writing", "education technology", "teacher tools"],
  authors: [{ name: "TeachTo" }],
  openGraph: {
    title: "TeachTo - IEP & 504 Goal-Writing Assistant",
    description: "Generate comprehensive IEP and 504 goals quickly and efficiently",
    url: "https://teach-to.com",
    siteName: "TeachTo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeachTo - IEP & 504 Goal Writing Assistant",
    description: "Generate comprehensive IEP and 504 goals quickly and efficiently",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
  },
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
