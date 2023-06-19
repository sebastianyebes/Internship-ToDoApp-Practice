import "./globals.css";
import { ReduxProvider } from "./redux/provider";

export const metadata = {
  title: "Todo App",
  description: "Practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
