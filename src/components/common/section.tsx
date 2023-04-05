import * as React from "react";

type Props = {
  children: React.ReactNode;
  classes?: string;
};
const Section = ({ children, classes }: Props) => {
  return (
    <section className={classes ?? "dark:bg-gray-900 py-100"}>
      <div className="max-w-6xl m-auto">{children}</div>
    </section>
  );
};
export default Section;
