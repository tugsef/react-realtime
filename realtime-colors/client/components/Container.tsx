export default function Container({
  children,
  color,
}: Readonly<{
  children: React.ReactNode;
  color?: string;
}>) {
  return (
    <section
      className={`flex h-screen w-full justify-center items-center`}
      style={{
        backgroundColor:color
      }}
    >
      {children}
    </section>
  );
}
