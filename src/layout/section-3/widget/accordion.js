import { createElement as _createElement } from "react";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Flat } from "../../..";
export default function ({ header, asideMenus }) {
    const pathname = usePathname();
    return (_jsxs(_Fragment, { children: [_jsx(Header, Object.assign({}, header)), asideMenus.map((item, i1) => (_jsx(Menu, { title: item.title, collapsed: item.collapsed, children: item.submenus.map((submenu, i2) => (_createElement(Submenu, Object.assign({}, submenu, { pathname: pathname, key: i2 })))) }, i1)))] }));
}
function Header({ children, href, iconSrc }) {
    href = href || "/";
    return (_jsxs(Link, { href: href, className: "h-(--height-nav) flex items-center p-3 text-xl font-bold overflow-hidden text-(--dark)", children: [iconSrc && (_jsx(Image, { className: "mr-3", width: 30, height: 30, src: iconSrc, alt: href })), children] }));
}
function Menu({ children, collapsed, title }) {
    const [collapse, setCollapse] = useState(collapsed);
    const icon = collapse ? Flat.AngleSmallDown : Flat.AngleSmallUp;
    return (_jsxs(_Fragment, { children: [_jsxs("button", { className: "h-[30px] lg:h-[40px] w-full flex items-center p-3 text-(--primary) font-bold", onClick: () => setCollapse(!collapse), children: [_jsx("div", { className: "grow text-left", children: title }), _jsx(Image, { className: "filter-(--primary-filter)", width: 20, height: 20, src: icon, alt: "up" })] }), collapse && children] }));
}
function Submenu({ title, href, iconSrc, pathname }) {
    let className = `h-[35px] mb-1 p-2 flex items-center text-sm rounded-sm layout-section-3-aside-submenu`;
    if (pathname.startsWith(href))
        className = `${className} active`;
    return (_jsx(Link, { className: `pl-6 pr-3 block`, href: href, children: _jsxs("div", { className: className, children: [iconSrc && (_jsx(Image, { className: "mr-2", src: iconSrc, width: 16, height: 16, alt: href })), title] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjb3JkaW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLElBQUksTUFBTSxXQUFXLENBQUM7QUFDN0IsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQWMsRUFBWSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDakQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLFVBQVUsQ0FBQztBQVM5QixNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBa0I7SUFDN0QsTUFBTSxRQUFRLEdBQUcsV0FBVyxFQUFFLENBQUM7SUFDL0IsT0FBTyxDQUNOLDhCQUNDLEtBQUMsTUFBTSxvQkFBSyxNQUFNLEVBQUksRUFDckIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQzdCLEtBQUMsSUFBSSxJQUVKLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUNqQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsWUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUNuQyxlQUFDLE9BQU8sb0JBQ0gsT0FBTyxJQUNYLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLEdBQUcsRUFBRSxFQUFFLElBQ04sQ0FDRixDQUFDLElBVEcsRUFBRSxDQVVELENBQ1AsQ0FBQyxJQUNBLENBQ0gsQ0FBQztBQUNILENBQUM7QUFRRCxTQUFTLE1BQU0sQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUF3QjtJQUMvRCxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsQ0FBQztJQUNuQixPQUFPLENBQ04sTUFBQyxJQUFJLElBQ0osSUFBSSxFQUFFLElBQUksRUFDVixTQUFTLEVBQUMsd0ZBQXdGLGFBQ2pHLE9BQU8sSUFBSSxDQUNYLEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBQyxNQUFNLEVBQ2hCLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsRUFDVixHQUFHLEVBQUUsT0FBTyxFQUNaLEdBQUcsRUFBRSxJQUFJLEdBQ1IsQ0FDRixFQUNBLFFBQVEsSUFDSCxDQUNQLENBQUM7QUFDSCxDQUFDO0FBUUQsU0FBUyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBc0I7SUFDOUQsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBRWhFLE9BQU8sQ0FDTiw4QkFDQyxrQkFDQyxTQUFTLEVBQUMsOEVBQThFLEVBQ3hGLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFDckMsY0FBSyxTQUFTLEVBQUMsZ0JBQWdCLFlBQUUsS0FBSyxHQUFPLEVBQzdDLEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBQywyQkFBMkIsRUFDckMsS0FBSyxFQUFFLEVBQUUsRUFDVCxNQUFNLEVBQUUsRUFBRSxFQUNWLEdBQUcsRUFBRSxJQUFJLEVBQ1QsR0FBRyxFQUFDLElBQUksR0FDUCxJQUNNLEVBRVIsUUFBUSxJQUFJLFFBQVEsSUFDbkIsQ0FDSCxDQUFDO0FBQ0gsQ0FBQztBQVFELFNBQVMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUE4QztJQUM3RixJQUFJLFNBQVMsR0FBRyx1RkFBdUYsQ0FBQztJQUN4RyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQUUsU0FBUyxHQUFHLEdBQUcsU0FBUyxTQUFTLENBQUM7SUFFakUsT0FBTyxDQUNOLEtBQUMsSUFBSSxJQUNKLFNBQVMsRUFBRSxpQkFBaUIsRUFDNUIsSUFBSSxFQUFFLElBQUksWUFDVixlQUFLLFNBQVMsRUFBRSxTQUFTLGFBQ3ZCLE9BQU8sSUFBSSxDQUNYLEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBQyxNQUFNLEVBQ2hCLEdBQUcsRUFBRSxPQUFPLEVBQ1osS0FBSyxFQUFFLEVBQUUsRUFDVCxNQUFNLEVBQUUsRUFBRSxFQUNWLEdBQUcsRUFBRSxJQUFJLEdBQ1IsQ0FDRixFQUNBLEtBQUssSUFDRCxHQUNBLENBQ1AsQ0FBQztBQUNILENBQUMifQ==