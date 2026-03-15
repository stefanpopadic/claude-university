interface StatusBadgeProps {
  status: "available" | "coming-soon" | "free";
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const label =
    status === "free" ? "Free" : status === "available" ? "Available" : "Coming Soon";

  return <span className={`status-badge status-badge--${status}`}>{label}</span>;
}
