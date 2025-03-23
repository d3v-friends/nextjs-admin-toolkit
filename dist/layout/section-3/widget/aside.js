"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function ({ children, open, onClose }) {
    return (_jsxs(_Fragment, { children: [_jsx("aside", { className: fnCss.sum(`
					w-(--width-aside) fixed lg:fixed top-0 left-0 h-full z-3 lg:z-auto
					overflow-hidden overscroll-y-auto 
					bg-(--color-background-nav) border-right
					transition-transform duration-300 lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}
				`), children: children }), open && (_jsx("div", { className: fnCss.concat("fixed lg:hidden top-0 left-0 z-2", "w-screen h-full min-h-screen", "transition-opacity duration-300", open ? "backdrop-blur-sm" : "opacity-0 pointer-events-none"), onClick: onClose }))] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGF5b3V0L3NlY3Rpb24tMy93aWRnZXQvYXNpZGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBUW5DLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBa0I7SUFDbEUsT0FBTyxDQUNOLDhCQUNDLGdCQUNDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDOzs7OzBEQUlpQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsbUJBQW1CO0tBQ2pHLENBQUMsWUFDRCxRQUFRLEdBQ0YsRUFDUCxJQUFJLElBQUksQ0FDUixjQUNDLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUN0QixrQ0FBa0MsRUFDbEMsOEJBQThCLEVBQzlCLGlDQUFpQyxFQUNqQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQywrQkFBK0IsQ0FDM0QsRUFDRCxPQUFPLEVBQUUsT0FBTyxHQUNmLENBQ0YsSUFDQyxDQUNILENBQUM7QUFDSCxDQUFDIn0=