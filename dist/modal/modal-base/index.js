"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { fnCss } from "nextjs-tools";
import FlatRegularCross from "web-asset/svg/regular/fi-rr-cross.svg";
import Backdrop from "../modal-backdrop";
export default function ({ open, onClose, children, disableEscapeKey, disableBackdrop, disableCloseButton }) {
    if (!open)
        return null;
    if (!children)
        return null;
    return (_jsx(Backdrop, { open: open, onClose: onClose, disableEscapeKey,
        disableBackdrop, children: _jsxs("div", { className: "flex flex-wrap", children: [!disableCloseButton && (_jsx("div", { className: "w-full pb-2 flex justify-end", children: _jsx(Image, { className: fnCss.concat("p-[0.2rem] cursor-pointer rounded-full filter-(--filter-hover-modal-close-button)"), width: 30, height: 30, src: FlatRegularCross, alt: "close", onClick: onClose }) })), _jsx("div", { className: fnCss.concat("w-full p-4 rounded-md shadow-2xl bg-(--color-background-modal-content)"), children: children })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kYWwvbW9kYWwtYmFzZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRW5DLE9BQU8sZ0JBQWdCLE1BQU0sdUNBQXVDLENBQUM7QUFDckUsT0FBTyxRQUE4QixNQUFNLG1CQUFtQixDQUFDO0FBTS9ELE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQVE7SUFDL0csSUFBSSxDQUFDLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUN2QixJQUFJLENBQUMsUUFBUTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRTNCLE9BQU8sQ0FDTixLQUFDLFFBQVEsSUFDUixJQUFJLEVBQUUsSUFBSSxFQUNWLE9BQU8sRUFBRSxPQUFPLEVBRWYsZ0JBQWdCO1FBQ2hCLGVBQWUsWUFFaEIsZUFBSyxTQUFTLEVBQUMsZ0JBQWdCLGFBQzdCLENBQUMsa0JBQWtCLElBQUksQ0FDdkIsY0FBSyxTQUFTLEVBQUMsOEJBQThCLFlBQzVDLEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUN0QixtRkFBbUYsQ0FDbkYsRUFDRCxLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEVBQ1YsR0FBRyxFQUFFLGdCQUFnQixFQUNyQixHQUFHLEVBQUUsT0FBTyxFQUNaLE9BQU8sRUFBRSxPQUFPLEdBQ2YsR0FDRyxDQUNOLEVBQ0QsY0FBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyx3RUFBd0UsQ0FBQyxZQUNwRyxRQUFRLEdBQ0osSUFDRCxHQUNJLENBQ1gsQ0FBQztBQUNILENBQUMifQ==