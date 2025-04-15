import { jsx as _jsx } from "react/jsx-runtime";
import { DateTime } from "luxon";
import FlatRegularClock from "web-asset/svg/regular/fi-rr-clock.svg";
import Base from "../v-base";
export default function ({ className, align, copy, timezone, hideTime, hideDate, format, children }) {
    timezone = timezone || "Asia/Seoul";
    if (!format) {
        const dateFormat = hideDate ? "" : "yyyy-MM-dd";
        const timeFormat = hideTime ? "" : " (a HH:mm)";
        format = `${dateFormat}${timeFormat}`;
    }
    return (_jsx(Base, { className, align, copy, iconSrc: FlatRegularClock, children: DateTime.fromISO(children).setZone(timezone).toFormat(format) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsdWUvdi10aW1lL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUUvQixPQUFPLGdCQUFnQixNQUFNLHVDQUF1QyxDQUFDO0FBQ3JFLE9BQU8sSUFBMEIsTUFBTSxXQUFXLENBQUM7QUFVbkQsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQWtCO0lBQ2pILFFBQVEsR0FBRyxRQUFRLElBQUksWUFBWSxDQUFDO0lBQ3BDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNiLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDaEQsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUNoRCxNQUFNLEdBQUcsR0FBRyxVQUFVLEdBQUcsVUFBVSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELE9BQU8sQ0FDTixLQUFDLElBQUksSUFDQyxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFDM0IsT0FBTyxFQUFFLGdCQUFnQixZQUN4QixRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQ3hELENBQ1AsQ0FBQztBQUNILENBQUMifQ==