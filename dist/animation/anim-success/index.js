import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { fnCss } from "nextjs-tools";
import { FlatRegularCheck } from "web-asset/src/regular/flat-regular-check";
export default function ({ className, width = 120, height = 120, stroke = 6, color = "success", loop = true }) {
    const cx = width / 2;
    const cy = height / 2;
    const r = Math.min(width, height) / 2 - 10;
    const animationCssWrapper = loop ? "draw-svg loop" : "draw-svg";
    const computedColor = getColor(color);
    return (_jsx("div", { className: fnCss.concat(animationCssWrapper, className), children: _jsxs("svg", { className: "draw-svg", width: width, height: height, viewBox: `0 0 ${width} ${height}`, style: { "--cx": cx, "--cy": cy, "--r": r }, children: [_jsx("circle", { className: "inner-circle", cx: cx, cy: cy, r: r, fill: computedColor, strokeWidth: "none" }), _jsx("circle", { className: "outer-circle", cx: cx, cy: cy, r: r, fill: computedColor, strokeWidth: "none" }), _jsx("circle", { className: "draw-circle", cx: cx, cy: cy, r: r, fill: "none", stroke: computedColor, strokeWidth: stroke }), _jsx("foreignObject", { x: 0, y: 0, width: width, height: height, children: _jsx("div", { className: "check-svg", children: _jsx(Image, { src: FlatRegularCheck, className: "check-svg", width: width, height: height, alt: "success" }) }) })] }) }));
}
const validColorStyle = [
    "primary",
    "secondary",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "light",
    "dark",
    "pink",
    "purple",
    "blue",
];
const getColor = (color) => {
    if (validColorStyle.includes(color)) {
        return `var(--${color})`;
    }
    return color;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYW5pbWF0aW9uL2FuaW0tc3VjY2Vzcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRW5DLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBWTFFLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxTQUFTLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxNQUFNLEdBQUcsR0FBRyxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFNBQVMsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFRO0lBQ2pILE1BQU0sRUFBRSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDckIsTUFBTSxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN0QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRTNDLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUNoRSxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFdEMsT0FBTyxDQUNOLGNBQUssU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsU0FBUyxDQUFDLFlBQzNELGVBQ0MsU0FBUyxFQUFFLFVBQVUsRUFDckIsS0FBSyxFQUFFLEtBQUssRUFDWixNQUFNLEVBQUUsTUFBTSxFQUNkLE9BQU8sRUFBRSxPQUFPLEtBQUssSUFBSSxNQUFNLEVBQUUsRUFDakMsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQWtCLGFBQzFELGlCQUNDLFNBQVMsRUFBRSxjQUFjLEVBQ3pCLEVBQUUsRUFBRSxFQUFFLEVBQ04sRUFBRSxFQUFFLEVBQUUsRUFDTixDQUFDLEVBQUUsQ0FBQyxFQUNKLElBQUksRUFBRSxhQUFhLEVBQ25CLFdBQVcsRUFBQyxNQUFNLEdBQ2pCLEVBQ0YsaUJBQ0MsU0FBUyxFQUFFLGNBQWMsRUFDekIsRUFBRSxFQUFFLEVBQUUsRUFDTixFQUFFLEVBQUUsRUFBRSxFQUNOLENBQUMsRUFBRSxDQUFDLEVBQ0osSUFBSSxFQUFFLGFBQWEsRUFDbkIsV0FBVyxFQUFDLE1BQU0sR0FDakIsRUFDRixpQkFDQyxTQUFTLEVBQUMsYUFBYSxFQUN2QixFQUFFLEVBQUUsRUFBRSxFQUNOLEVBQUUsRUFBRSxFQUFFLEVBQ04sQ0FBQyxFQUFFLENBQUMsRUFDSixJQUFJLEVBQUMsTUFBTSxFQUNYLE1BQU0sRUFBRSxhQUFhLEVBQ3JCLFdBQVcsRUFBRSxNQUFNLEdBQ2xCLEVBQ0Ysd0JBQ0MsQ0FBQyxFQUFFLENBQUMsRUFDSixDQUFDLEVBQUUsQ0FBQyxFQUNKLEtBQUssRUFBRSxLQUFLLEVBQ1osTUFBTSxFQUFFLE1BQU0sWUFDZCxjQUFLLFNBQVMsRUFBRSxXQUFXLFlBQzFCLEtBQUMsS0FBSyxJQUNMLEdBQUcsRUFBRSxnQkFBZ0IsRUFDckIsU0FBUyxFQUFFLFdBQVcsRUFDdEIsS0FBSyxFQUFFLEtBQUssRUFDWixNQUFNLEVBQUUsTUFBTSxFQUNkLEdBQUcsRUFBRSxTQUFTLEdBQ2IsR0FDRyxHQUNTLElBQ1gsR0FDRCxDQUNOLENBQUM7QUFDSCxDQUFDO0FBRUQsTUFBTSxlQUFlLEdBQWlCO0lBQ3JDLFNBQVM7SUFDVCxXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCxTQUFTO0lBQ1QsTUFBTTtJQUNOLFNBQVM7SUFDVCxRQUFRO0lBQ1IsT0FBTztJQUNQLE1BQU07SUFDTixNQUFNO0lBQ04sUUFBUTtJQUNSLE1BQU07Q0FDTixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUEwQixFQUFVLEVBQUU7SUFDdkQsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ25ELE9BQU8sU0FBUyxLQUFLLEdBQUcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZCxDQUFDLENBQUMifQ==