"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ActLoading, ModalBase } from "../..";
export default function ({ className, children, loadingChildren, pending, action, ask, disableEscapeKey, disableBackdrop, disableCloseButton, disableLoadingView, }) {
    const [form, setForm] = useState();
    const [open, setOpen] = useState(false);
    const askProps = {
        confirm: () => {
            form === null || form === void 0 ? void 0 : form.requestSubmit();
            setOpen(false);
        },
        cancel: () => {
            setOpen(false);
        },
    };
    const childrenProps = {
        open: () => {
            if (form === null || form === void 0 ? void 0 : form.reportValidity())
                setOpen(true);
        },
        close: () => setOpen(false),
    };
    return (_jsxs(_Fragment, { children: [_jsx("form", { ref: setForm, className: className, action: action, children: children(childrenProps) }), form && (_jsx(ModalBase, { disableCloseButton: disableCloseButton, disableEscapeKey: disableEscapeKey, disableBackdrop: disableBackdrop, open: open, onClose: () => setOpen(false), children: ask(askProps) })), !disableLoadingView && _jsx(ActLoading, { pending: pending, children: loadingChildren })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZm9ybS9mb3JtLWFzay1jb25maXJtL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBYyxFQUFZLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQXlCNUMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUN4QixTQUFTLEVBQ1QsUUFBUSxFQUNSLGVBQWUsRUFDZixPQUFPLEVBQ1AsTUFBTSxFQUNOLEdBQUcsRUFDSCxnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixrQkFBa0IsR0FDRDtJQUNqQixNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsRUFBNkIsQ0FBQztJQUM5RCxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV4QyxNQUFNLFFBQVEsR0FBdUI7UUFDcEMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNiLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxhQUFhLEVBQUUsQ0FBQztZQUN0QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUNELE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEIsQ0FBQztLQUNELENBQUM7SUFFRixNQUFNLGFBQWEsR0FBa0I7UUFDcEMsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUNWLElBQUksSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLGNBQWMsRUFBRTtnQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUNELEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0tBQzNCLENBQUM7SUFFRixPQUFPLENBQ04sOEJBQ0MsZUFDQyxHQUFHLEVBQUUsT0FBTyxFQUNaLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLE1BQU0sRUFBRSxNQUFNLFlBQ2IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUNsQixFQUVOLElBQUksSUFBSSxDQUNSLEtBQUMsU0FBUyxJQUNULGtCQUFrQixFQUFFLGtCQUFrQixFQUN0QyxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFDbEMsZUFBZSxFQUFFLGVBQWUsRUFDaEMsSUFBSSxFQUFFLElBQUksRUFDVixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUM1QixHQUFHLENBQUMsUUFBUSxDQUFDLEdBQ0gsQ0FDWixFQUVBLENBQUMsa0JBQWtCLElBQUksS0FBQyxVQUFVLElBQUMsT0FBTyxFQUFFLE9BQU8sWUFBRyxlQUFlLEdBQWMsSUFDbEYsQ0FDSCxDQUFDO0FBQ0gsQ0FBQyJ9