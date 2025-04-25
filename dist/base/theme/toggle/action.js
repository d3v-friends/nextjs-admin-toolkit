"use server";
import { cookies } from "next/headers";
import { fnServerAction } from "nextjs-tools";
import { THEME_KEY, toggle, validate } from "../fn";
import actionForm from "./form";
export default async function (_, form) {
    return fnServerAction.parser(form, actionForm, async () => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Jhc2UvdGhlbWUvdG9nZ2xlL2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3JDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDNUMsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQ2xELE9BQU8sVUFBVSxNQUFNLFFBQVEsQ0FBQztBQUVoQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxDQUFNLEVBQUUsSUFBYztJQUNwRCxPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLElBQUksRUFBRTs7UUFDekQsTUFBTSxDQUFDLEdBQUcsTUFBTSxPQUFPLEVBQUUsQ0FBQztRQUMxQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQSxNQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLDBDQUFFLEtBQUssS0FBSSxPQUFPLENBQUMsQ0FBQztRQUMxRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUVELE9BQU87WUFDTixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsS0FBSyxFQUFFO2dCQUNOLE1BQU0sRUFBRSxJQUFJLEtBQUssSUFBSTtnQkFDckIsS0FBSyxFQUFFLElBQUk7YUFDWDtTQUNELENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMifQ==