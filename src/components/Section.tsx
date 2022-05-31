export default function Section({
  header,
  children,
  className = "content-wrapper",
}: {
  header?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={className} style={{ width: "100%" }}>
      {header && (
        <h2 className="b-ui--header" style={{ padding: "2px 4px" }}>
          {header}
        </h2>
      )}
      {children}
    </section>
  );
}
