export type Theme = "light" | "dark";
export declare const THEME_KEY = "theme";
export declare const ThemeAll: Theme[];
export declare function validate(t: string): Theme;
export declare function expect(classNames: string[]): Theme;
export declare function toggle(t?: string): Theme;
