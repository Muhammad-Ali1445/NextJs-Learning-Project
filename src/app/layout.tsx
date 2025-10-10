import "./globals.css";
import { ErrorWrapper } from "./error-wrapper";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Learning Nextjs",
    template: "%s | Learning Nextjs",
  },
  description: "Present in root layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body lang="eng">
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          <p>Header</p>
        </header>
        <ErrorWrapper>

        {children}
        </ErrorWrapper>
        <footer style={{ backgroundColor: "red", padding: "1rem" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
