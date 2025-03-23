"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function ({ children, open, onClose }) {
    return (_jsxs(_Fragment, { children: [_jsx("aside", { className: fnCss.sum(`z-20
					w-(--width-aside) fixed lg:fixed top-0 left-0 h-full 
					overflow-hidden overscroll-y-auto 
					bg-(--color-background-nav) border-right
					transition-transform duration-200 lg:translate-x-0`, open ? "translate-x-0" : "-translate-x-full"), onClick: (e) => {
                    e.preventDefault();
                    onClose();
                }, children: children }), open && (_jsx("div", { className: fnCss.concat("fixed lg:hidden top-0 left-0", "w-screen h-full min-h-screen", "transition-opacity duration-300", open ? "backdrop-blur-sm" : "opacity-0 pointer-events-none"), onClick: onClose }))] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGF5b3V0L3NlY3Rpb24tMy93aWRnZXQvYXNpZGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBUW5DLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBa0I7SUFDbEUsT0FBTyxDQUNOLDhCQUNDLGdCQUNDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUNuQjs7Ozt3REFJbUQsRUFDbkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUM1QyxFQUNELE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO29CQUNkLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDbkIsT0FBTyxFQUFFLENBQUM7Z0JBQ1gsQ0FBQyxZQUNBLFFBQVEsR0FDRixFQUNQLElBQUksSUFBSSxDQUNSLGNBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQ3RCLDhCQUE4QixFQUM5Qiw4QkFBOEIsRUFDOUIsaUNBQWlDLEVBQ2pDLElBQUksQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLCtCQUErQixDQUMzRCxFQUNELE9BQU8sRUFBRSxPQUFPLEdBQ2YsQ0FDRixJQUNDLENBQ0gsQ0FBQztBQUNILENBQUMifQ==