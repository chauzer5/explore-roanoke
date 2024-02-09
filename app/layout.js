export const metadata = {
  title: "Explore Roanoke",
  description: "Find your next adventure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
