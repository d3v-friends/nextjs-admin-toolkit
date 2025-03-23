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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xheW91dC9zZWN0aW9uLTMvd2lkZ2V0L2FjY29yZGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxJQUFJLE1BQU0sV0FBVyxDQUFDO0FBQzdCLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFjLEVBQVksUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQ2pELE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFTOUIsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQWtCO0lBQzdELE1BQU0sUUFBUSxHQUFHLFdBQVcsRUFBRSxDQUFDO0lBQy9CLE9BQU8sQ0FDTiw4QkFDQyxLQUFDLE1BQU0sb0JBQUssTUFBTSxFQUFJLEVBQ3JCLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUM3QixLQUFDLElBQUksSUFFSixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLFlBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FDbkMsZUFBQyxPQUFPLG9CQUNILE9BQU8sSUFDWCxRQUFRLEVBQUUsUUFBUSxFQUNsQixHQUFHLEVBQUUsRUFBRSxJQUNOLENBQ0YsQ0FBQyxJQVRHLEVBQUUsQ0FVRCxDQUNQLENBQUMsSUFDQSxDQUNILENBQUM7QUFDSCxDQUFDO0FBUUQsU0FBUyxNQUFNLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBd0I7SUFDL0QsSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLENBQUM7SUFDbkIsT0FBTyxDQUNOLE1BQUMsSUFBSSxJQUNKLElBQUksRUFBRSxJQUFJLEVBQ1YsU0FBUyxFQUFDLHdGQUF3RixhQUNqRyxPQUFPLElBQUksQ0FDWCxLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUMsTUFBTSxFQUNoQixLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEVBQ1YsR0FBRyxFQUFFLE9BQU8sRUFDWixHQUFHLEVBQUUsSUFBSSxHQUNSLENBQ0YsRUFDQSxRQUFRLElBQ0gsQ0FDUCxDQUFDO0FBQ0gsQ0FBQztBQVFELFNBQVMsSUFBSSxDQUFDLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXNCO0lBQzlELE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUVoRSxPQUFPLENBQ04sOEJBQ0Msa0JBQ0MsU0FBUyxFQUFDLDhFQUE4RSxFQUN4RixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQ3JDLGNBQUssU0FBUyxFQUFDLGdCQUFnQixZQUFFLEtBQUssR0FBTyxFQUM3QyxLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUMsMkJBQTJCLEVBQ3JDLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsRUFDVixHQUFHLEVBQUUsSUFBSSxFQUNULEdBQUcsRUFBQyxJQUFJLEdBQ1AsSUFDTSxFQUVSLFFBQVEsSUFBSSxRQUFRLElBQ25CLENBQ0gsQ0FBQztBQUNILENBQUM7QUFRRCxTQUFTLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBOEM7SUFDN0YsSUFBSSxTQUFTLEdBQUcsdUZBQXVGLENBQUM7SUFDeEcsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUFFLFNBQVMsR0FBRyxHQUFHLFNBQVMsU0FBUyxDQUFDO0lBRWpFLE9BQU8sQ0FDTixLQUFDLElBQUksSUFDSixTQUFTLEVBQUUsaUJBQWlCLEVBQzVCLElBQUksRUFBRSxJQUFJLFlBQ1YsZUFBSyxTQUFTLEVBQUUsU0FBUyxhQUN2QixPQUFPLElBQUksQ0FDWCxLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUMsTUFBTSxFQUNoQixHQUFHLEVBQUUsT0FBTyxFQUNaLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsRUFDVixHQUFHLEVBQUUsSUFBSSxHQUNSLENBQ0YsRUFDQSxLQUFLLElBQ0QsR0FDQSxDQUNQLENBQUM7QUFDSCxDQUFDIn0=