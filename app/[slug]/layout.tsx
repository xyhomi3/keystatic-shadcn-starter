export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container py-8">{children}</div>;
}
