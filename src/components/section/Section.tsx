import { ReactElement } from "react";
import { SectionProps } from "src/utils/Interface";

export default function Section({
  header,
  children,
  className,
  style = { width: "100%" },
}: SectionProps) {
  return (
    <section className={className} style={style}>
      {header && (
        <h2 className="b-ui--header" style={{ padding: "2px 4px" }}>
          {header}
        </h2>
      )}
      {children}
    </section>
  );
}
