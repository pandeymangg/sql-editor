import "tailwindcss/tailwind.css";
import { AppWrapper } from "../contexts/AppContext";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Component {...pageProps} />
      </ThemeProvider>
    </AppWrapper>
  );
}

export default MyApp;
