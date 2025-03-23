"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss, fnEnv } from "nextjs-tools";
export default function Component({ state, printer, className, }) {
    className = className || "";
    printer = printer || {};
    if (!state.error)
        return null;
    const debug = fnEnv.client.string("NODE_ENV") === "development";
    let msg = state.error.message;
    for (const key in printer) {
        if (msg.includes(key)) {
            msg = printer[key];
        }
    }
    return (_jsxs("p", { className: fnCss.concat("text-center text-(--danger)", className), children: [msg, debug && state.error && (_jsxs(_Fragment, { children: [_jsx("br", {}), "(", state.error.message, ")"] }))] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWN0aW9uL2FjdC1lcnJvcnMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBUSxNQUFNLGNBQWMsQ0FBQztBQUdqRCxNQUFNLENBQUMsT0FBTyxVQUFVLFNBQVMsQ0FBQyxFQUNqQyxLQUFLLEVBQ0wsT0FBTyxFQUNQLFNBQVMsR0FLVDtJQUNBLFNBQVMsR0FBRyxTQUFTLElBQUksRUFBRSxDQUFDO0lBQzVCLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0lBRXhCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRTlCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLGFBQWEsQ0FBQztJQUNoRSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUM5QixLQUFLLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzNCLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQztJQUNGLENBQUM7SUFFRCxPQUFPLENBQ04sYUFBRyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSxTQUFTLENBQUMsYUFDbEUsR0FBRyxFQUNILEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQ3hCLDhCQUNDLGNBQU0sT0FBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sU0FDekIsQ0FDSCxJQUNFLENBQ0osQ0FBQztBQUNILENBQUMifQ==