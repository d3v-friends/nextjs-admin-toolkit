"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRouter } from "next/navigation";
import { useServerAction } from "nextjs-tools";
import { useEffect, useState } from "react";
import { expect } from "../fn";
import Action from "./action";
import Form from "./form";
export default function ({ children }) {
    const [time, setTime] = useState(0);
    const [state, action] = useServerAction(Action, Form);
    const [form, setForm] = useState();
    const [theme, setTheme] = useState();
    const router = useRouter();
    useEffect(() => {
        if (!state.response)
            return;
        if (state.response.time === time)
            return;
        setTime(state.response.time);
        if (state.response.value.reload) {
            router.refresh();
        }
        setTheme(state.response.value.theme);
    }, [state.response]);
    useEffect(() => {
        setTheme(expect(document.documentElement.classList.values().toArray()));
    }, []);
    if (!children)
        return null;
    if (!theme)
        return null;
    return (_jsxs(_Fragment, { children: [_jsx("form", { action: action, ref: setForm }), form &&
                children({
                    toggle: () => {
                        form.requestSubmit();
                    },
                    theme,
                })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYmFzZS90aGVtZS90b2dnbGUvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxFQUFXLGVBQWUsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUN2RCxPQUFjLEVBQVksU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUM1RCxPQUFPLEVBQUMsTUFBTSxFQUFRLE1BQU0sT0FBTyxDQUFDO0FBQ3BDLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUM5QixPQUFPLElBQUksTUFBTSxRQUFRLENBQUM7QUFXMUIsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLFFBQVEsRUFBa0I7SUFDbkQsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxFQUE2QixDQUFDO0lBQzlELE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsUUFBUSxFQUFtQixDQUFDO0lBQ3RELE1BQU0sTUFBTSxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBRTNCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQzVCLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssSUFBSTtZQUFFLE9BQU87UUFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0IsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEIsQ0FBQztRQUNELFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUVyQixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMzQixJQUFJLENBQUMsS0FBSztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRXhCLE9BQU8sQ0FDTiw4QkFDQyxlQUNDLE1BQU0sRUFBRSxNQUFNLEVBQ2QsR0FBRyxFQUFFLE9BQU8sR0FDWCxFQUVELElBQUk7Z0JBQ0osUUFBUSxDQUFDO29CQUNSLE1BQU0sRUFBRSxHQUFHLEVBQUU7d0JBQ1osSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUN0QixDQUFDO29CQUNELEtBQUs7aUJBQ0wsQ0FBQyxJQUNELENBQ0gsQ0FBQztBQUNILENBQUMifQ==