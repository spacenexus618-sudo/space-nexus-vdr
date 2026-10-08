interface LastUpdatedProps {
  date: string;
  className?: string;
  pricingAsOf?: string;
  showRelative?: boolean;
}

function relativeLabel(date: string): string | null {
  const then = new Date(date).getTime();
  if (Number.isNaN(then)) return null;
  const diffMs = Date.now() - then;
  if (diffMs < 0) return null;
  const days = Math.floor(diffMs / 86400000);
  if (days < 1) return "updated today";
  if (days === 1) return "updated yesterday";
  if (days < 30) return `updated ${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `updated ${months} month${months === 1 ? "" : "s"} ago`;
  const years = Math.floor(months / 12);
  return `updated ${years} year${years === 1 ? "" : "s"} ago`;
}

export default function LastUpdated({ date, className = "", pricingAsOf, showRelative = true }: LastUpdatedProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const relative = showRelative ? relativeLabel(date) : null;

  return (
    <div className={`text-sm text-gray-600 ${className}`}>
      <span className="inline-flex items-center gap-1.5">
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <time dateTime={date}>Last updated: {formattedDate}</time>
        {relative && <span className="text-gray-400">({relative})</span>}
      </span>
    </div>
  );
}
