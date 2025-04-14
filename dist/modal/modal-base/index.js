"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { fnCss } from "nextjs-tools";
import { FlatRegularCross } from "../../asset/regular/flat-regular-cross";
import Backdrop from "../modal-backdrop";
export default function ({ open, onClose, children, disableEscapeKey, disableBackdrop, disableCloseButton }) {
    if (!open)
        return null;
    if (!children)
        return null;
    return (_jsx(Backdrop, { open: open, onClose: onClose, disableEscapeKey,
        disableBackdrop, children: _jsxs("div", { className: "flex flex-wrap", children: [!disableCloseButton && (_jsx("div", { className: "w-full pb-2 flex justify-end", children: _jsx(Image, { className: fnCss.concat("p-[0.2rem] cursor-pointer rounded-full filter-(--filter-hover-modal-close-button)"), width: 30, height: 30, src: FlatRegularCross, alt: "close", onClick: onClose }) })), _jsx("div", { className: fnCss.concat("w-full p-4 rounded-md shadow-2xl bg-(--color-background-modal-content)"), children: children })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kYWwvbW9kYWwtYmFzZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRW5DLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sUUFBOEIsTUFBTSxtQkFBbUIsQ0FBQztBQU0vRCxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFRO0lBQy9HLElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDdkIsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPLElBQUksQ0FBQztJQUUzQixPQUFPLENBQ04sS0FBQyxRQUFRLElBQ1IsSUFBSSxFQUFFLElBQUksRUFDVixPQUFPLEVBQUUsT0FBTyxFQUVmLGdCQUFnQjtRQUNoQixlQUFlLFlBRWhCLGVBQUssU0FBUyxFQUFDLGdCQUFnQixhQUM3QixDQUFDLGtCQUFrQixJQUFJLENBQ3ZCLGNBQUssU0FBUyxFQUFDLDhCQUE4QixZQUM1QyxLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FDdEIsbUZBQW1GLENBQ25GLEVBQ0QsS0FBSyxFQUFFLEVBQUUsRUFDVCxNQUFNLEVBQUUsRUFBRSxFQUNWLEdBQUcsRUFBRSxnQkFBZ0IsRUFDckIsR0FBRyxFQUFFLE9BQU8sRUFDWixPQUFPLEVBQUUsT0FBTyxHQUNmLEdBQ0csQ0FDTixFQUNELGNBQUssU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsd0VBQXdFLENBQUMsWUFDcEcsUUFBUSxHQUNKLElBQ0QsR0FDSSxDQUNYLENBQUM7QUFDSCxDQUFDIn0=