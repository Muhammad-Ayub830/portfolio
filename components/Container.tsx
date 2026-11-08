export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // 1200px of content at desktop (1280px max width minus 40px padding each side), matching the Figma design.
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}
