"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function Component({ state, printer, className, }) {
    className = className || "";
    printer = printer || {};
    if (!state.err)
        return null;
    let msg = state.err;
    for (const key in printer) {
        if (msg.includes(key)) {
            msg = printer[key];
        }
    }
    return _jsx("p", { className: fnCss.concat("text-center text-(--danger)", className), children: msg });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWN0aW9uL2FjdC1lcnJvcnMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFPLEVBQWMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBR2hELE1BQU0sQ0FBQyxPQUFPLFVBQVUsU0FBUyxDQUFDLEVBQ2pDLEtBQUssRUFDTCxPQUFPLEVBQ1AsU0FBUyxHQUtUO0lBQ0EsU0FBUyxHQUFHLFNBQVMsSUFBSSxFQUFFLENBQUM7SUFDNUIsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFFeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFNUIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNwQixLQUFLLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzNCLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQztJQUNGLENBQUM7SUFFRCxPQUFPLFlBQUcsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsU0FBUyxDQUFDLFlBQUcsR0FBRyxHQUFLLENBQUM7QUFDeEYsQ0FBQyJ9