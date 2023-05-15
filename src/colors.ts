type Color = string;
interface Theme {
  colorPrimary: Color;
  colorSecondary: Color;
  colorDisabled: Color;
  colorBg: Color;
  colorAccent: Color;
  colorHover: Color;
}

const Dark = {
  colorPrimary: "#d8d8d8",
  colorSecondary: "rgb(154, 160, 166)",
  colorDisabled: "rgb(196, 198, 201)",
  colorBg: "rgb(49, 41, 41)",
  colorAccent: "rgb(2, 156, 253)",
  colorHover: "rgb(68, 59, 59)",
} satisfies Theme;

const Light = {
  colorPrimary: "#302d2d",
  colorSecondary: "rgb(101, 106, 110)",
  colorDisabled: "rgb(125, 129, 136)",
  colorBg: "rgb(236, 226, 226)",
  colorAccent: "rgb(2, 111, 253)",
  colorHover: "rgb(177, 168, 168)",
} satisfies Theme;
export type { Color, Theme };
export { Dark, Light };
