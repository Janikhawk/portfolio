const IMG_VIGNETTE =
  "linear-gradient(to bottom, transparent 0%, transparent 28%, transparent 72%, white 100%)";

export default function ProjectScreenshot({
  screenshotUrl,
  className,
}: {
  screenshotUrl: string;
  className?: string;
}) {
  return (
    <div className={`relative rounded-xl overflow-hidden flex-shrink-0 ${className ?? ""}`}>
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${screenshotUrl})` }}
      />
      <div className="absolute inset-0" style={{ background: IMG_VIGNETTE }} />
    </div>
  );
}
