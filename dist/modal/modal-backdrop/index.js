"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import { useCallback, useEffect } from "react";
Component.__isStatic = true;
export default function Component({ open, children, onClose, disableEscapeKey, disableBackdrop }) {
    const onEscPress = useCallback((e) => {
        if (e.key == "Escape") {
            onClose();
        }
    }, [onClose]);
    const onClick = () => {
        if (disableBackdrop)
            return;
        onClose();
    };
    useEffect(() => {
        if (disableEscapeKey) {
            return;
        }
        if (open) {
            window.addEventListener("keydown", onEscPress);
        }
        else {
            window.removeEventListener("keydown", onEscPress);
        }
        return () => {
            window.removeEventListener("keydown", onEscPress);
        };
    }, [onEscPress, open, disableEscapeKey]);
    if (!children)
        return null;
    if (!open)
        return null;
    return (_jsx("div", { className: fnCss.concat("w-full h-full z-100 fixed left-0 top-0", "flex items-center justify-center", "backdrop-blur-xs backdrop-grayscale-40", "bg-(--color-background-modal)"), onClick: onClick, children: _jsx("div", { className: fnCss.concat("pl-0.5 pr-0.5 z-110 pointer-events-auto", "lg:pl-0 lg:pr-0"), onClick: (e) => {
                e.stopPropagation();
            }, children: children }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kYWwvbW9kYWwtYmFja2Ryb3AvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ25DLE9BQWMsRUFBK0IsV0FBVyxFQUFFLFNBQVMsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQVVsRixTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUU1QixNQUFNLENBQUMsT0FBTyxVQUFVLFNBQVMsQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBa0I7SUFDOUcsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUM3QixDQUFDLENBQWdCLEVBQUUsRUFBRTtRQUNwQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7WUFDdkIsT0FBTyxFQUFFLENBQUM7UUFDWCxDQUFDO0lBQ0YsQ0FBQyxFQUNELENBQUMsT0FBTyxDQUFDLENBQ1QsQ0FBQztJQUVGLE1BQU0sT0FBTyxHQUFzQyxHQUFHLEVBQUU7UUFDdkQsSUFBSSxlQUFlO1lBQUUsT0FBTztRQUM1QixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUMsQ0FBQztJQUVGLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxJQUFJLGdCQUFnQixFQUFFLENBQUM7WUFDdEIsT0FBTztRQUNSLENBQUM7UUFFRCxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ1YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNoRCxDQUFDO2FBQU0sQ0FBQztZQUNQLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUVELE9BQU8sR0FBRyxFQUFFO1lBQ1gsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUV6QyxJQUFJLENBQUMsUUFBUTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRTNCLElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFdkIsT0FBTyxDQUNOLGNBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQ3RCLHdDQUF3QyxFQUN4QyxrQ0FBa0MsRUFDbEMsd0NBQXdDLEVBQ3hDLCtCQUErQixDQUMvQixFQUNELE9BQU8sRUFBRSxPQUFPLFlBQ2hCLGNBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMseUNBQXlDLEVBQUUsaUJBQWlCLENBQUMsRUFDckYsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2QsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3JCLENBQUMsWUFDQSxRQUFRLEdBQ0osR0FDRCxDQUNOLENBQUM7QUFDSCxDQUFDIn0=