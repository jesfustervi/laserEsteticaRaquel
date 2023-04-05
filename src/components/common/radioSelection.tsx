import { RadioGroup } from "@headlessui/react";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { useState } from "react";
import { IFrequency } from "../../models/frequency.interface";
import { classNames } from "../utils/commonUtils";

interface ButtonProps {
  frequencies: IFrequency[];
  defaultValue?: IFrequency;
  onUpdate: (value: IFrequency) => void;
}
export const radioButtonStyles = cva(
  `grid grid-cols-2 gap-x-1 rounded-full  p-1 text-center text-xs font-semibold leading-5 text-white`,
  {
    variants: {
      intent: {
        primary: `bg-white/5 text-white`,
        dark: `dark:bg-gray-800  dark:hover:bg-gray-700 bg-white ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0`,
        secondary: `bg-black text-white`,
        danger: `dark:bg-red-500 bg-red-600 text-white`
      }
    },
    defaultVariants: {
      intent: "primary"
    }
  }
);

export interface Props
  extends ButtonProps,
    VariantProps<typeof radioButtonStyles> {}

const RadioSelection = ({
  intent,
  frequencies,
  defaultValue,
  onUpdate
}: Props) => {
  const [value, setValue] = useState(defaultValue ?? frequencies[0]);

  const onChange = (value: IFrequency): void => {
    setValue(value);
    onUpdate(value);
  };

  return (
    <div className="mt-16 flex justify-center">
      <RadioGroup
        value={value}
        onChange={onChange}
        className={radioButtonStyles({ intent })}
        // className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
      >
        <RadioGroup.Label className="sr-only">
          Payment frequency
        </RadioGroup.Label>
        {frequencies.map((option) => (
          <RadioGroup.Option
            key={option.value}
            value={option}
            className={() =>
              classNames(
                value.value === option.value
                  ? "dark:bg-indigo-500 bg-black text-white"
                  : "",

                "cursor-pointer rounded-full py-1 px-2.5"
              )
            }
          >
            <span>{option.label}</span>
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioSelection;
