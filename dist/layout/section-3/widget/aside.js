"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function ({ children, open, onClose }) {
    return (_jsxs(_Fragment, { children: [_jsx("aside", { className: fnCss.sum(`
					z-20
					w-(--width-aside) fixed lg:fixed top-0 left-0 h-full 
					overflow-hidden overscroll-y-auto 
					bg-(--color-background-nav) border-right
					transition-transform duration-200 lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}
				`), onClick: (e) => {
                    e.preventDefault();
                    onClose();
                }, children: children }), open && (_jsx("div", { className: fnCss.concat("fixed lg:hidden top-0 left-0", "w-screen h-full min-h-screen", "transition-opacity duration-300", open ? "backdrop-blur-sm" : "opacity-0 pointer-events-none"), onClick: onClose }))] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGF5b3V0L3NlY3Rpb24tMy93aWRnZXQvYXNpZGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBUW5DLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBa0I7SUFDbEUsT0FBTyxDQUNOLDhCQUNDLGdCQUNDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDOzs7OzswREFLaUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjtLQUNqRyxDQUFDLEVBQ0YsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQ2QsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNuQixPQUFPLEVBQUUsQ0FBQztnQkFDWCxDQUFDLFlBQ0EsUUFBUSxHQUNGLEVBQ1AsSUFBSSxJQUFJLENBQ1IsY0FDQyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FDdEIsOEJBQThCLEVBQzlCLDhCQUE4QixFQUM5QixpQ0FBaUMsRUFDakMsSUFBSSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsK0JBQStCLENBQzNELEVBQ0QsT0FBTyxFQUFFLE9BQU8sR0FDZixDQUNGLElBQ0MsQ0FDSCxDQUFDO0FBQ0gsQ0FBQyJ9