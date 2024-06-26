import type { Metadata } from "next";
import { 
  Inter, 
  Roboto, 
  Lato, 
  Open_Sans, 
  Montserrat, 
  Poppins, 
  Raleway, 
  Merriweather, 
  Oswald, 
  Nunito,
  Arsenal
} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Navbar/ResponsiveNav";
import Footer from "./components/Footer/Footer";

const inter = Inter({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'] 
});
const roboto = Roboto({ 
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin']
});
const lato = Lato({ 
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin']
});
const openSans = Open_Sans({ 
  weight: ['300', '400', '600', '700', '800'],
  subsets: ['latin']
});
const montserrat = Montserrat({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});
const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});
const raleway = Raleway({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});
const merriweather = Merriweather({ 
  weight: ['300', '400', '700', '900'],
  subsets: ['latin']
});
const oswald = Oswald({ 
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin']
});
const nunito = Nunito({ 
  weight: ['200', '300', '400', '600', '700', '800', '900'],
  subsets: ['latin']
});

const arsenal = Arsenal({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
});

export const metadata: Metadata = {
  title: "Arsenal Website template",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}> 
        <ResponsiveNav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
