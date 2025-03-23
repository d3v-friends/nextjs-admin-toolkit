"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ModalBase } from "../..";
export default function ({ state, children }) {
    const [open, setOpen] = useState(true);
    const [time, setTime] = useState(0);
    useEffect(() => {
        if (!state)
            return;
        if (!state.response)
            return;
        if (time === state.response.time)
            return;
        setOpen(true);
        setTime(state.response.time);
    }, [state]);
    if (!state)
        return null;
    if (!state.response)
        return null;
    if (!children)
        return null;
    const childrenProps = {
        close: () => setOpen(false),
    };
    return (_jsx(ModalBase, { disableBackdrop: true, disableCloseButton: true, open: open, onClose: () => setOpen(false), children: children(childrenProps) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWN0aW9uL2FjdC1yZXNwb25zZS1tb2RhbC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQWMsRUFBWSxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQzVELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFnQmhDLE1BQU0sQ0FBQyxPQUFPLFdBQWMsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFxQjtJQUNoRSxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDNUIsSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV6QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRVosSUFBSSxDQUFDLEtBQUs7UUFBRSxPQUFPLElBQUksQ0FBQztJQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFBRSxPQUFPLElBQUksQ0FBQztJQUNqQyxJQUFJLENBQUMsUUFBUTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRTNCLE1BQU0sYUFBYSxHQUFrQjtRQUNwQyxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztLQUMzQixDQUFDO0lBRUYsT0FBTyxDQUNOLEtBQUMsU0FBUyxJQUNULGVBQWUsUUFDZixrQkFBa0IsUUFDbEIsSUFBSSxFQUFFLElBQUksRUFDVixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUM1QixRQUFRLENBQUMsYUFBYSxDQUFDLEdBQ2IsQ0FDWixDQUFDO0FBQ0gsQ0FBQyJ9