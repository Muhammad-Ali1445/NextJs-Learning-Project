export const metadata = {
  title: "Root Layout",
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
        {children}
        <footer style={{ backgroundColor: "red", padding: "1rem" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
