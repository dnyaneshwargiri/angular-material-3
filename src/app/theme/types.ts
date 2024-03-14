export type Colors =
  | "violet"
  | "red"
  | "blue"
  | "green"
  | "yellow"
  | "cyan"
  | "orange"
  | "magenta"
  | "chartreuse"
  | "azure"
  | "rose";

export type ThemeClass = `${Colors}-light` | `${Colors}-dark`;

export interface ThemeOption {
  light: {
    hex: `#${string}`;
    class: ThemeClass;
  };
  dark: {
    hex: `#${string}`;
    class: ThemeClass;
  };
  name: Colors;
}
