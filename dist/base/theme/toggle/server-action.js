"use server";
import { fnAction } from "nextjs-tools";
import actionForm from "./form";
import { cookies } from "next/headers";
import { THEME_KEY, toggle, validate } from "../fn";
export default async function (_, form) {
    return fnAction.new(form, actionForm, async () => {
        var _a;
        const c = await cookies();
        const prev = validate(((_a = c.get(THEME_KEY)) === null || _a === void 0 ? void 0 : _a.value) || "light");
        const next = toggle(prev);
        if (prev !== next) {
            c.set(THEME_KEY, next);
        }
        return {
            time: new Date().getTime(),
            value: {
                reload: prev !== next,
                theme: next,
            },
        };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9iYXNlL3RoZW1lL3RvZ2dsZS9zZXJ2ZXItYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDdEMsT0FBTyxVQUFVLE1BQU0sUUFBUSxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDckMsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBRWxELE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLENBQU0sRUFBRSxJQUFjO0lBQ3BELE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssSUFBSSxFQUFFOztRQUNoRCxNQUFNLENBQUMsR0FBRyxNQUFNLE9BQU8sRUFBRSxDQUFDO1FBQzFCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFBLE1BQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsMENBQUUsS0FBSyxLQUFJLE9BQU8sQ0FBQyxDQUFDO1FBQzFELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBRUQsT0FBTztZQUNOLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUMxQixLQUFLLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLElBQUksS0FBSyxJQUFJO2dCQUNyQixLQUFLLEVBQUUsSUFBSTthQUNYO1NBQ0QsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyJ9