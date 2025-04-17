"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useRouter } from "next/navigation";
export default function ({ children, href }) {
    const router = useRouter();
    return (_jsx("tr", { onClick: (e) => {
            e.stopPropagation();
            e.preventDefault();
            router.push(href);
        }, children: children }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RhYmxlL3RhYmxlLWxpbmsvcm93LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBUTFDLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFrQjtJQUN6RCxNQUFNLE1BQU0sR0FBRyxTQUFTLEVBQUUsQ0FBQztJQUMzQixPQUFPLENBQ04sYUFDQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNkLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixDQUFDLFlBQ0EsUUFBUSxHQUNMLENBQ0wsQ0FBQztBQUNILENBQUMifQ==