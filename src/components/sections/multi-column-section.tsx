import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

type MultiColumnProps = {
  title: string;
};

export const multiColumnStyles = cva(`grid`, {
  variants: {
    intent: {
      twoCols: "grid-cols-2 gap-2",
      threeCols: "grid-cols-3 gap-2",
      fourCols: "grid-cols-4 gap-2",
      twoRows: "grid-rows-2 gap-2",
      threeRows: "grid-rows-3 gap-2",
      fourRows: "grid-rows-4 gap-2"
    }
  },
  defaultVariants: {
    intent: "twoCols"
  }
});

export interface Props
  extends MultiColumnProps,
    VariantProps<typeof multiColumnStyles> {}
const MultiColumn = ({ title, intent }: Props) => {
  return (
    <div class="title">
      {title && <h2>{title}</h2>}
      <div className={multiColumnStyles({ intent })}>
        <p>test1</p>
        <p>test2</p>
        <p>test1</p>
      </div>
    </div>
  );
};

export default MultiColumn;
