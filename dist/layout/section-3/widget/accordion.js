import { createElement as _createElement } from "react";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { fnCss } from "nextjs-tools";
import { useState } from "react";
import Down from "web-asset/svg/regular/fi-rr-angle-small-down.svg";
import Up from "web-asset/svg/regular/fi-rr-angle-small-up.svg";
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
    const icon = collapse ? Down : Up;
    return (_jsxs(_Fragment, { children: [_jsxs("button", { className: fnCss.sum("h-[30px] lg:h-[40px] w-full flex items-center p-3 font-bold", collapse ? "text-(--primary)" : "text-(--light)"), onClick: () => setCollapse(!collapse), children: [_jsx("div", { className: "grow text-left", children: title }), _jsx(Image, { className: collapse ? "filter-(--primary-filter)" : "filter-(--light-filter)", width: 20, height: 20, src: icon, alt: "indicator" })] }), collapse && children] }));
}
function Submenu({ title, href, iconSrc, pathname }) {
    let className = `h-[35px] mb-1 p-2 flex items-center text-sm rounded-sm layout-section-3-aside-submenu`;
    if (pathname.startsWith(href))
        className = `${className} active`;
    return (_jsx(Link, { className: `pl-6 pr-3 block`, href: href, children: _jsxs("div", { className: className, children: [iconSrc && (_jsx(Image, { className: "mr-2", src: iconSrc, width: 16, height: 16, alt: href })), title] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xheW91dC9zZWN0aW9uLTMvd2lkZ2V0L2FjY29yZGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxJQUFJLE1BQU0sV0FBVyxDQUFDO0FBQzdCLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ25DLE9BQWMsRUFBWSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDakQsT0FBTyxJQUFJLE1BQU0sa0RBQWtELENBQUM7QUFDcEUsT0FBTyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFTaEUsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQWtCO0lBQzdELE1BQU0sUUFBUSxHQUFHLFdBQVcsRUFBRSxDQUFDO0lBQy9CLE9BQU8sQ0FDTiw4QkFDQyxLQUFDLE1BQU0sb0JBQUssTUFBTSxFQUFJLEVBQ3JCLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUM3QixLQUFDLElBQUksSUFFSixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLFlBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FDbkMsZUFBQyxPQUFPLG9CQUNILE9BQU8sSUFDWCxRQUFRLEVBQUUsUUFBUSxFQUNsQixHQUFHLEVBQUUsRUFBRSxJQUNOLENBQ0YsQ0FBQyxJQVRHLEVBQUUsQ0FVRCxDQUNQLENBQUMsSUFDQSxDQUNILENBQUM7QUFDSCxDQUFDO0FBUUQsU0FBUyxNQUFNLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBd0I7SUFDL0QsSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLENBQUM7SUFDbkIsT0FBTyxDQUNOLE1BQUMsSUFBSSxJQUNKLElBQUksRUFBRSxJQUFJLEVBQ1YsU0FBUyxFQUFDLHdGQUF3RixhQUNqRyxPQUFPLElBQUksQ0FDWCxLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUMsTUFBTSxFQUNoQixLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEVBQ1YsR0FBRyxFQUFFLE9BQU8sRUFDWixHQUFHLEVBQUUsSUFBSSxHQUNSLENBQ0YsRUFDQSxRQUFRLElBQ0gsQ0FDUCxDQUFDO0FBQ0gsQ0FBQztBQVFELFNBQVMsSUFBSSxDQUFDLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXNCO0lBQzlELE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFbEMsT0FBTyxDQUNOLDhCQUNDLGtCQUVDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUNuQiw2REFBNkQsRUFDN0QsUUFBUSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQ2hELEVBQ0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUNyQyxjQUFLLFNBQVMsRUFBQyxnQkFBZ0IsWUFBRSxLQUFLLEdBQU8sRUFDN0MsS0FBQyxLQUFLLElBQ0wsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixFQUM3RSxLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEVBQ1YsR0FBRyxFQUFFLElBQUksRUFDVCxHQUFHLEVBQUMsV0FBVyxHQUNkLElBQ00sRUFFUixRQUFRLElBQUksUUFBUSxJQUNuQixDQUNILENBQUM7QUFDSCxDQUFDO0FBUUQsU0FBUyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQThDO0lBQzdGLElBQUksU0FBUyxHQUFHLHVGQUF1RixDQUFDO0lBQ3hHLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFBRSxTQUFTLEdBQUcsR0FBRyxTQUFTLFNBQVMsQ0FBQztJQUVqRSxPQUFPLENBQ04sS0FBQyxJQUFJLElBQ0osU0FBUyxFQUFFLGlCQUFpQixFQUM1QixJQUFJLEVBQUUsSUFBSSxZQUNWLGVBQUssU0FBUyxFQUFFLFNBQVMsYUFDdkIsT0FBTyxJQUFJLENBQ1gsS0FBQyxLQUFLLElBQ0wsU0FBUyxFQUFDLE1BQU0sRUFDaEIsR0FBRyxFQUFFLE9BQU8sRUFDWixLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEVBQ1YsR0FBRyxFQUFFLElBQUksR0FDUixDQUNGLEVBQ0EsS0FBSyxJQUNELEdBQ0EsQ0FDUCxDQUFDO0FBQ0gsQ0FBQyJ9