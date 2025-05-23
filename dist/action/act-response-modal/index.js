"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ModalBase } from "../..";
export default function ({ state, children }) {
    const [open, setOpen] = useState(false);
    const [time, setTime] = useState(0);
    useEffect(() => {
        if (!state)
            return;
        if (time === state.time)
            return;
        setOpen(true);
        setTime(state.time);
    }, [state]);
    if (!state)
        return null;
    if (state.err)
        return null;
    if (!children)
        return null;
    return (_jsx(ModalBase, { disableBackdrop: true, disableCloseButton: true, open: open, onClose: () => setOpen(false), children: children(() => setOpen(false)) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWN0aW9uL2FjdC1yZXNwb25zZS1tb2RhbC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQWMsRUFBWSxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQzVELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFPaEMsTUFBTSxDQUFDLE9BQU8sV0FBYyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQXFCO0lBQ2hFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXBDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDbkIsSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRWhDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVaLElBQUksQ0FBQyxLQUFLO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDeEIsSUFBSSxLQUFLLENBQUMsR0FBRztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzNCLElBQUksQ0FBQyxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFM0IsT0FBTyxDQUNOLEtBQUMsU0FBUyxJQUNULGVBQWUsUUFDZixrQkFBa0IsUUFDbEIsSUFBSSxFQUFFLElBQUksRUFDVixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUM1QixRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQ3BCLENBQ1osQ0FBQztBQUNILENBQUMifQ==