export default function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className: string;
}): JSX.Element {
  return <span className={`badge ${className}`}>{children}</span>;
}
