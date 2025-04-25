"use server";
import { jsx as _jsx } from "react/jsx-runtime";
import { cookies } from "next/headers";
import { validate } from "../theme/fn";
import "../../../asset/style/index.scss";
export default async function ({ children, lang }) {
    var _a;
    const c = await cookies();
    const theme = validate(((_a = c.get("theme")) === null || _a === void 0 ? void 0 : _a.value) || "light");
    return (_jsx("html", { lang: lang || "en", className: theme, children: _jsx("body", { className: "text-12 lg:text-16 bg-(--color-background-body)", children: children }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYmFzZS9odG1sL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUVyQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8saUNBQWlDLENBQUM7QUFPekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQVcsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFrQjs7SUFDL0QsTUFBTSxDQUFDLEdBQUcsTUFBTSxPQUFPLEVBQUUsQ0FBQztJQUMxQixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQSxNQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLDBDQUFFLEtBQUssS0FBSSxPQUFPLENBQUMsQ0FBQztJQUV6RCxPQUFPLENBQ04sZUFDQyxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksRUFDbEIsU0FBUyxFQUFFLEtBQUssWUFDaEIsZUFBTSxTQUFTLEVBQUMsaURBQWlELFlBQUUsUUFBUSxHQUFRLEdBQzdFLENBQ1AsQ0FBQztBQUNILENBQUMifQ==