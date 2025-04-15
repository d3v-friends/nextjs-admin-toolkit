"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Image from "next/image";
import { fnCss } from "nextjs-tools";
import { useState } from "react";
import { FlatRegularMenuBurger } from "web-asset/src/regular/flat-regular-menu-burger";
import Accordion from "./accordion";
import Aside from "./aside";
export default function ({ header, asideMenus, top }) {
    const [open, setOpen] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsxs("header", { className: fnCss.sum(`
					flex items-center top-0 z-10
					sticky lg:left-(--width-aside) lg:w-(--width-main) w-full left-0 h-(--height-header) px-2 
					bg-(--color-background-nav) border-bottom
					transition-all duration-300
				`), children: [_jsx("button", { className: fnCss.sum(`mx-2 block lg:hidden p-2 rounded-sm border-all`), onClick: () => setOpen(!open), children: _jsx(Image, { className: "filter-(--light-filter)", src: FlatRegularMenuBurger, width: 25, height: 25, alt: "menu" }) }), _jsx("div", { className: "flex-1" }), _jsx("div", { className: "text-(--light)", children: top })] }), _jsx(Aside, { open: open, onClose: () => setOpen(false), children: _jsx(Accordion, { header, asideMenus }) })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGF5b3V0L3NlY3Rpb24tMy93aWRnZXQvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNuQyxPQUFjLEVBQVksUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQ2pELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sU0FBb0MsTUFBTSxhQUFhLENBQUM7QUFDL0QsT0FBTyxLQUFLLE1BQU0sU0FBUyxDQUFDO0FBTTVCLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBa0I7SUFDbEUsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFeEMsT0FBTyxDQUNOLDhCQUNDLGtCQUNDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDOzs7OztLQUtwQixDQUFDLGFBQ0YsaUJBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsRUFDdEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUM3QixLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUMseUJBQXlCLEVBQ25DLEdBQUcsRUFBRSxxQkFBcUIsRUFDMUIsS0FBSyxFQUFFLEVBQUUsRUFDVCxNQUFNLEVBQUUsRUFBRSxFQUNWLEdBQUcsRUFBQyxNQUFNLEdBQ1QsR0FDTSxFQUNULGNBQUssU0FBUyxFQUFDLFFBQVEsR0FBRyxFQUMxQixjQUFLLFNBQVMsRUFBQyxnQkFBZ0IsWUFBRSxHQUFHLEdBQU8sSUFDbkMsRUFDVCxLQUFDLEtBQUssSUFDTCxJQUFJLEVBQUUsSUFBSSxFQUNWLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQzdCLEtBQUMsU0FBUyxJQUFNLE1BQU0sRUFBRSxVQUFVLEdBQUssR0FDaEMsSUFDTixDQUNILENBQUM7QUFDSCxDQUFDIn0=