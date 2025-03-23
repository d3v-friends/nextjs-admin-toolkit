import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function ({ children, pending }) {
    if (!pending)
        return null;
    return (_jsx("div", { className: fnCss.concat("w-full h-full z-100 fixed left-0 top-0", "flex items-center justify-center", "backdrop-blur-xs backdrop-grayscale-40"), children: children || _jsx("div", { className: "text-(--light)", children: "\uB85C\uB529\uC911..." }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWN0aW9uL2FjdC1sb2FkaW5nL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQVNuQyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBa0I7SUFDNUQsSUFBSSxDQUFDLE9BQU87UUFBRSxPQUFPLElBQUksQ0FBQztJQUUxQixPQUFPLENBQ04sY0FDQyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FDdEIsd0NBQXdDLEVBQ3hDLGtDQUFrQyxFQUNsQyx3Q0FBd0MsQ0FFeEMsWUFDQSxRQUFRLElBQUksY0FBSyxTQUFTLEVBQUMsZ0JBQWdCLHNDQUFhLEdBQ3BELENBQ04sQ0FBQztBQUNILENBQUMifQ==