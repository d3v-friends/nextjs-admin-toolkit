"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ActLoading, ModalBase } from "../..";
export default function ({ className, children, loadingChildren, pending, action, ask, disableEscapeKey = true, disableBackdrop = true, disableCloseButton = true, disableLoadingView, }) {
    const [form, setForm] = useState();
    const [open, setOpen] = useState(false);
    if (!children)
        return null;
    const onConfirm = () => {
        form === null || form === void 0 ? void 0 : form.requestSubmit();
        setOpen(false);
    };
    const onCancel = () => {
        setOpen(false);
    };
    const onOpen = () => {
        if (form === null || form === void 0 ? void 0 : form.reportValidity())
            setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (_jsxs(_Fragment, { children: [_jsx("form", { ref: setForm, className: className, action: action, children: children(onOpen, onClose) }), form && (_jsx(ModalBase, { disableCloseButton: disableCloseButton, disableEscapeKey: disableEscapeKey, disableBackdrop: disableBackdrop, open: open, onClose: () => setOpen(false), children: ask(onConfirm, onCancel) })), !disableLoadingView && _jsx(ActLoading, { pending: pending, children: loadingChildren })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWN0aW9uL2FjdC1hc2stZm9ybS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQWMsRUFBWSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDakQsT0FBTyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFlNUMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUN4QixTQUFTLEVBQ1QsUUFBUSxFQUNSLGVBQWUsRUFDZixPQUFPLEVBQ1AsTUFBTSxFQUNOLEdBQUcsRUFDSCxnQkFBZ0IsR0FBRyxJQUFJLEVBQ3ZCLGVBQWUsR0FBRyxJQUFJLEVBQ3RCLGtCQUFrQixHQUFHLElBQUksRUFDekIsa0JBQWtCLEdBQ0Q7SUFDakIsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLEVBQTZCLENBQUM7SUFDOUQsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFeEMsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPLElBQUksQ0FBQztJQUUzQixNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7UUFDdEIsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLGFBQWEsRUFBRSxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUM7SUFFRixNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7UUFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQztJQUVGLE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUNuQixJQUFJLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxjQUFjLEVBQUU7WUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFDO0lBRUYsTUFBTSxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUM7SUFFRixPQUFPLENBQ04sOEJBQ0MsZUFDQyxHQUFHLEVBQUUsT0FBTyxFQUNaLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLE1BQU0sRUFBRSxNQUFNLFlBQ2IsUUFBUSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FDcEIsRUFFTixJQUFJLElBQUksQ0FDUixLQUFDLFNBQVMsSUFDVCxrQkFBa0IsRUFBRSxrQkFBa0IsRUFDdEMsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQ2xDLGVBQWUsRUFBRSxlQUFlLEVBQ2hDLElBQUksRUFBRSxJQUFJLEVBQ1YsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFDNUIsR0FBRyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsR0FDZCxDQUNaLEVBRUEsQ0FBQyxrQkFBa0IsSUFBSSxLQUFDLFVBQVUsSUFBQyxPQUFPLEVBQUUsT0FBTyxZQUFHLGVBQWUsR0FBYyxJQUNsRixDQUNILENBQUM7QUFDSCxDQUFDIn0=