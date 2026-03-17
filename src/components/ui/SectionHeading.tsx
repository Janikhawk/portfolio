interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: Props) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg text-gray-500 leading-relaxed ${
            centered ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
