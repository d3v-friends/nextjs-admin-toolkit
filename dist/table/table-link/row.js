"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useRouter } from "next/navigation";
export default function ({ children, href }) {
    const router = useRouter();
    const onClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        switch (e.button) {
            case 0:
                router.push(href);
                return;
            case 1:
                window.open(href, "_blank");
                return;
        }
    };
    return (_jsx("tr", { onClick: onClick, onMouseDown: onClick, children: children }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RhYmxlL3RhYmxlLWxpbmsvcm93LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBUTFDLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFrQjtJQUN6RCxNQUFNLE1BQU0sR0FBRyxTQUFTLEVBQUUsQ0FBQztJQUMzQixNQUFNLE9BQU8sR0FBaUQsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNuRSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xCLEtBQUssQ0FBQztnQkFFTCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixPQUFPO1lBQ1IsS0FBSyxDQUFDO2dCQUVMLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM1QixPQUFPO1FBQ1QsQ0FBQztJQUNGLENBQUMsQ0FBQztJQUNGLE9BQU8sQ0FDTixhQUNDLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLFdBQVcsRUFBRSxPQUFPLFlBQ25CLFFBQVEsR0FDTCxDQUNMLENBQUM7QUFDSCxDQUFDIn0=