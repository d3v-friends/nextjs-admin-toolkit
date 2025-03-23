"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { fnCss } from "nextjs-tools";
export default function ({ iconSrc, className, children, align, copy, ellipsis, length }) {
    if (!children)
        return null;
    align = align || "justify-center";
    copy = copy || false;
    ellipsis = ellipsis || false;
    length = length || 15;
    let value = children;
    if (typeof value === "string" && ellipsis) {
        value = length < value.length ? `${value.slice(0, length)}...` : value;
    }
    const onCopy = (e) => {
        if (!copy)
            return;
        e.stopPropagation();
        switch (typeof children) {
            case "string":
                window.navigator.clipboard.writeText(children).catch();
                break;
            case "number":
            case "bigint":
                window.navigator.clipboard.writeText(`${children}`).catch();
                break;
        }
    };
    return (_jsxs("span", { className: fnCss.concat("inline-flex items-center mr-3", "value", align, className), children: [iconSrc && (_jsx(Image, { className: fnCss.concat("mr-2 pb-[2px]", "primary"), width: 16, height: 16, src: iconSrc, alt: "icon", priority: true })), _jsx("div", { className: fnCss.concat(copy && "value-copy"), onClick: onCopy, children: value })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsdWUvdi1iYXNlL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFjbkMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBUTtJQUM1RixJQUFJLENBQUMsUUFBUTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzNCLEtBQUssR0FBRyxLQUFLLElBQUksZ0JBQWdCLENBQUM7SUFDbEMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLLENBQUM7SUFDckIsUUFBUSxHQUFHLFFBQVEsSUFBSSxLQUFLLENBQUM7SUFDN0IsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDO0lBQ3JCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzNDLEtBQUssR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDeEUsQ0FBQztJQUVELE1BQU0sTUFBTSxHQUFzQyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ3ZELElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNsQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsUUFBUSxPQUFPLFFBQVEsRUFBRSxDQUFDO1lBQ3pCLEtBQUssUUFBUTtnQkFDWixNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZELE1BQU07WUFDUCxLQUFLLFFBQVEsQ0FBQztZQUNkLEtBQUssUUFBUTtnQkFDWixNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM1RCxNQUFNO1FBQ1IsQ0FBQztJQUNGLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTixnQkFBTSxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQywrQkFBK0IsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxhQUN2RixPQUFPLElBQUksQ0FDWCxLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLEVBQ25ELEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsRUFDVixHQUFHLEVBQUUsT0FBTyxFQUNaLEdBQUcsRUFBQyxNQUFNLEVBQ1YsUUFBUSxFQUFFLElBQUksR0FDYixDQUNGLEVBQ0QsY0FDQyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksWUFBWSxDQUFDLEVBQzdDLE9BQU8sRUFBRSxNQUFNLFlBQ2QsS0FBSyxHQUNELElBQ0EsQ0FDUCxDQUFDO0FBQ0gsQ0FBQyJ9