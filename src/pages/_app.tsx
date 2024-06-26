import NavbarComponents from "@/@custom/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavbarComponents />
      <Component {...pageProps} />
    </div>
  );
}
