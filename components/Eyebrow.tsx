export default function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-[13px] font-semibold uppercase tracking-[0.08em] ${
        light ? "text-indigo-100" : "text-accent"
      }`}
    >
      {children}
    </p>
  );
}
