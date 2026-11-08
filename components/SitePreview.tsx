// A simple stand-in for a website screenshot, built from shapes.
// Used until a real screenshot exists for a project.

export function PreviewBody({
  accent,
  soft,
  large = false,
}: {
  accent: string;
  soft: string;
  large?: boolean;
}) {
  return (
    <div className={`flex flex-col ${large ? "gap-4 p-7" : "gap-2.5 p-[18px]"}`}>
      <div
        className={`rounded-lg ${large ? "h-[130px] sm:h-[170px]" : "h-[74px]"}`}
        style={{ backgroundColor: accent }}
      />
      <div
        className={`rounded bg-gray-300 ${large ? "h-3 w-[260px] max-w-full" : "h-2 w-[150px]"}`}
      />
      <div
        className={`rounded bg-gray-200 ${large ? "h-3 w-[180px] max-w-full" : "h-2 w-[100px]"}`}
      />
      <div className={`grid grid-cols-3 ${large ? "gap-3.5" : "gap-2.5"}`}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`rounded-lg ${large ? "h-[60px] sm:h-20" : "h-10"}`}
            style={{ backgroundColor: soft }}
          />
        ))}
      </div>
    </div>
  );
}

export default function SitePreview({
  accent,
  soft,
  large = false,
  className = "",
}: {
  accent: string;
  soft: string;
  large?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden bg-white ${
        large
          ? "h-[320px] rounded-[20px] border border-line shadow-[0_20px_40px_rgba(0,0,0,0.12)] sm:h-[440px]"
          : "h-[220px]"
      } ${className}`}
    >
      <div className="flex items-center gap-1.5 bg-gray-100 px-3.5 py-2.5">
        <span className="h-[9px] w-[9px] rounded-full bg-gray-300" />
        <span className="h-[9px] w-[9px] rounded-full bg-gray-300" />
        <span className="h-[9px] w-[9px] rounded-full bg-gray-300" />
      </div>
      <PreviewBody accent={accent} soft={soft} large={large} />
    </div>
  );
}
