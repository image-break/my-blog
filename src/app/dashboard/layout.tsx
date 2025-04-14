
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="border-2 border-dashed border-black p-4">
        <h2>我是根 Dashboard Layout</h2>
        {children}
    </div>
  );
}
 