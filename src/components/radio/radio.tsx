import React, { useState } from "react";
import "./radio.scss";
import { cls } from "@koido/cls";
import { Size, Theme } from "@/types";

type RadioProps = {
  theme?: Theme;
  size: Size;
};

const Radio = ({ theme = "light" }: RadioProps) => {
  const [on, setOn] = useState<boolean>(false);
  return (
    <div
      className="radio"
      onClick={() => setOn((state) => !state)}
      data-theme={theme}
    >
      <div
        className={cls(
          "radio__placeholder",
          on && "radio__placeholder-expanded"
        )}
      />
      <div className="radio__toggle"></div>
    </div>
  );
};

export default Radio;
