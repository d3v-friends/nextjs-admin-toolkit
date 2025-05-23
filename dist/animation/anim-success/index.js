import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { fnCss } from "nextjs-tools";
import FlatRegularCheck from "web-asset/svg/regular/fi-rr-check.svg";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYW5pbWF0aW9uL2FuaW0tc3VjY2Vzcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRW5DLE9BQU8sZ0JBQWdCLE1BQU0sdUNBQXVDLENBQUM7QUFZckUsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLFNBQVMsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLE1BQU0sR0FBRyxHQUFHLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsU0FBUyxFQUFFLElBQUksR0FBRyxJQUFJLEVBQVE7SUFDakgsTUFBTSxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNyQixNQUFNLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFM0MsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQ2hFLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV0QyxPQUFPLENBQ04sY0FBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLENBQUMsWUFDM0QsZUFDQyxTQUFTLEVBQUUsVUFBVSxFQUNyQixLQUFLLEVBQUUsS0FBSyxFQUNaLE1BQU0sRUFBRSxNQUFNLEVBQ2QsT0FBTyxFQUFFLE9BQU8sS0FBSyxJQUFJLE1BQU0sRUFBRSxFQUNqQyxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBa0IsYUFDMUQsaUJBQ0MsU0FBUyxFQUFFLGNBQWMsRUFDekIsRUFBRSxFQUFFLEVBQUUsRUFDTixFQUFFLEVBQUUsRUFBRSxFQUNOLENBQUMsRUFBRSxDQUFDLEVBQ0osSUFBSSxFQUFFLGFBQWEsRUFDbkIsV0FBVyxFQUFDLE1BQU0sR0FDakIsRUFDRixpQkFDQyxTQUFTLEVBQUUsY0FBYyxFQUN6QixFQUFFLEVBQUUsRUFBRSxFQUNOLEVBQUUsRUFBRSxFQUFFLEVBQ04sQ0FBQyxFQUFFLENBQUMsRUFDSixJQUFJLEVBQUUsYUFBYSxFQUNuQixXQUFXLEVBQUMsTUFBTSxHQUNqQixFQUNGLGlCQUNDLFNBQVMsRUFBQyxhQUFhLEVBQ3ZCLEVBQUUsRUFBRSxFQUFFLEVBQ04sRUFBRSxFQUFFLEVBQUUsRUFDTixDQUFDLEVBQUUsQ0FBQyxFQUNKLElBQUksRUFBQyxNQUFNLEVBQ1gsTUFBTSxFQUFFLGFBQWEsRUFDckIsV0FBVyxFQUFFLE1BQU0sR0FDbEIsRUFDRix3QkFDQyxDQUFDLEVBQUUsQ0FBQyxFQUNKLENBQUMsRUFBRSxDQUFDLEVBQ0osS0FBSyxFQUFFLEtBQUssRUFDWixNQUFNLEVBQUUsTUFBTSxZQUNkLGNBQUssU0FBUyxFQUFFLFdBQVcsWUFDMUIsS0FBQyxLQUFLLElBQ0wsR0FBRyxFQUFFLGdCQUFnQixFQUNyQixTQUFTLEVBQUUsV0FBVyxFQUN0QixLQUFLLEVBQUUsS0FBSyxFQUNaLE1BQU0sRUFBRSxNQUFNLEVBQ2QsR0FBRyxFQUFFLFNBQVMsR0FDYixHQUNHLEdBQ1MsSUFDWCxHQUNELENBQ04sQ0FBQztBQUNILENBQUM7QUFFRCxNQUFNLGVBQWUsR0FBaUI7SUFDckMsU0FBUztJQUNULFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLFNBQVM7SUFDVCxNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixPQUFPO0lBQ1AsTUFBTTtJQUNOLE1BQU07SUFDTixRQUFRO0lBQ1IsTUFBTTtDQUNOLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQTBCLEVBQVUsRUFBRTtJQUN2RCxJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBbUIsQ0FBQyxFQUFFLENBQUM7UUFDbkQsT0FBTyxTQUFTLEtBQUssR0FBRyxDQUFDO0lBQzFCLENBQUM7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNkLENBQUMsQ0FBQyJ9