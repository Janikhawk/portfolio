export default function TechStack({
  stack,
  variant,
}: {
  stack: string[];
  variant: "desktop" | "mobile";
}) {
  const badgeClass =
    variant === "desktop"
      ? "px-2.5 py-1 text-xs font-medium bg-gray-50 border border-gray-200 text-gray-700 rounded-md"
      : "px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded border border-gray-200";

  return (
    <div className="flex flex-wrap gap-1.5">
      {stack.map((tech) => (
        <span key={tech} className={badgeClass}>
          {tech}
        </span>
      ))}
    </div>
  );
}
