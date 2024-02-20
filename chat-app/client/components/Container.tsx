export default function Container({
  children,
  color,
  className
}: Readonly<{
  children: React.ReactNode;
  color?: string;
  className?:string
}>) {
  return (
    <section
      className={`flex h-screen w-full justify-center flex-col items-center ${className}` }
      style={{
        backgroundColor: `${color}`,
      }}
    >
      {children}
    </section>
  );
}