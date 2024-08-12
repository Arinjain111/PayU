export function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}
