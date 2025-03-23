import { jsx as _jsx } from "react/jsx-runtime";
import { ScssProvider } from "../..";
export const viewport = {
    width: "device-width",
    initialScale: 1.0,
};
export default function ({ children, lang }) {
    return (_jsx(ScssProvider, { children: _jsx("html", { lang: lang || "en", children: _jsx("body", { className: "text-12 lg:text-16 bg-(--color-background-body)", children: children }) }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYmFzZS9odG1sL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLE9BQU8sQ0FBQztBQU9uQyxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQWE7SUFDakMsS0FBSyxFQUFFLGNBQWM7SUFDckIsWUFBWSxFQUFFLEdBQUc7Q0FDakIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFrQjtJQUN6RCxPQUFPLENBQ04sS0FBQyxZQUFZLGNBQ1osZUFBTSxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksWUFDdkIsZUFBTSxTQUFTLEVBQUMsaURBQWlELFlBQUUsUUFBUSxHQUFRLEdBQzdFLEdBQ08sQ0FDZixDQUFDO0FBQ0gsQ0FBQyJ9