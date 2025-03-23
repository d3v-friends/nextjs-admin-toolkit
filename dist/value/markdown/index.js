"use server";
import { jsx as _jsx } from "react/jsx-runtime";
import gfm from "remark-gfm";
import parse from "remark-parse";
import rehype from "remark-rehype";
import stringify from "rehype-stringify";
import { unified } from "unified";
import prism from "rehype-prism";
import { validate } from "../../base/theme/fn";
import { cookies } from "next/headers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/themes/prism-okaidia.min.css";
import "prismjs/components/prism-go";
import "prismjs/components/prism-typescript";
export default async function ({ children = "", className }) {
    var _a;
    children = children.replaceAll("\n", "\r");
    const value = await unified()
        .use(parse)
        .use(gfm)
        .use(rehype)
        .use(prism, { plugins: ["line-numbers"] })
        .use(stringify)
        .process(children);
    const c = await cookies();
    const theme = validate(((_a = c.get("theme")) === null || _a === void 0 ? void 0 : _a.value) || "light");
    switch (theme) {
        case "dark":
            break;
        case "light":
            break;
    }
    return (_jsx("div", { className: className, dangerouslySetInnerHTML: { __html: String(value) } }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsdWUvbWFya2Rvd24vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLEdBQUcsTUFBTSxZQUFZLENBQUM7QUFDN0IsT0FBTyxLQUFLLE1BQU0sY0FBYyxDQUFDO0FBQ2pDLE9BQU8sTUFBTSxNQUFNLGVBQWUsQ0FBQztBQUNuQyxPQUFPLFNBQVMsTUFBTSxrQkFBa0IsQ0FBQztBQUN6QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQ2hDLE9BQU8sS0FBSyxNQUFNLGNBQWMsQ0FBQztBQUNqQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDN0MsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUdyQyxPQUFPLHFEQUFxRCxDQUFDO0FBQzdELE9BQU8sc0NBQXNDLENBQUM7QUFDOUMsT0FBTyw2QkFBNkIsQ0FBQztBQUNyQyxPQUFPLHFDQUFxQyxDQUFDO0FBTzdDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLEVBQUMsUUFBUSxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQWtCOztJQUN6RSxRQUFRLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsTUFBTSxLQUFLLEdBQUcsTUFBTSxPQUFPLEVBQUU7U0FDM0IsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUNWLEdBQUcsQ0FBQyxHQUFHLENBQUM7U0FDUixHQUFHLENBQUMsTUFBTSxDQUFDO1NBQ1gsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFDLENBQUM7U0FDdkMsR0FBRyxDQUFDLFNBQVMsQ0FBQztTQUNkLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVwQixNQUFNLENBQUMsR0FBRyxNQUFNLE9BQU8sRUFBRSxDQUFDO0lBQzFCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFBLE1BQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsMENBQUUsS0FBSyxLQUFJLE9BQU8sQ0FBQyxDQUFDO0lBRXpELFFBQVEsS0FBSyxFQUFFLENBQUM7UUFDZixLQUFLLE1BQU07WUFDVixNQUFNO1FBQ1AsS0FBSyxPQUFPO1lBQ1gsTUFBTTtJQUNSLENBQUM7SUFFRCxPQUFPLENBQ04sY0FDQyxTQUFTLEVBQUUsU0FBUyxFQUNwQix1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUMsR0FDL0MsQ0FDRixDQUFDO0FBQ0gsQ0FBQyJ9