"use server";
import { jsx as _jsx } from "react/jsx-runtime";
import { ScssProvider } from "../..";
import { cookies } from "next/headers";
import { validate } from "../theme/fn";
export default async function ({ children, lang }) {
    var _a;
    const c = await cookies();
    const theme = validate(((_a = c.get("theme")) === null || _a === void 0 ? void 0 : _a.value) || "light");
    return (_jsx(ScssProvider, { children: _jsx("html", { lang: lang || "en", className: theme, children: _jsx("body", { className: "text-12 lg:text-16 bg-(--color-background-body)", children: children }) }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYmFzZS9odG1sL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNuQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3JDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFPckMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQVcsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFrQjs7SUFDL0QsTUFBTSxDQUFDLEdBQUcsTUFBTSxPQUFPLEVBQUUsQ0FBQztJQUMxQixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQSxNQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLDBDQUFFLEtBQUssS0FBSSxPQUFPLENBQUMsQ0FBQztJQUV6RCxPQUFPLENBQ04sS0FBQyxZQUFZLGNBQ1osZUFDQyxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksRUFDbEIsU0FBUyxFQUFFLEtBQUssWUFDaEIsZUFBTSxTQUFTLEVBQUMsaURBQWlELFlBQUUsUUFBUSxHQUFRLEdBQzdFLEdBQ08sQ0FDZixDQUFDO0FBQ0gsQ0FBQyJ9