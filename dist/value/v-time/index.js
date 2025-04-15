import { jsx as _jsx } from "react/jsx-runtime";
import { DateTime } from "luxon";
import { FlatRegularClock } from "web-asset/src/regular/flat-regular-clock";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsdWUvdi10aW1lL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUUvQixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUMxRSxPQUFPLElBQTBCLE1BQU0sV0FBVyxDQUFDO0FBVW5ELE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFrQjtJQUNqSCxRQUFRLEdBQUcsUUFBUSxJQUFJLFlBQVksQ0FBQztJQUNwQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDYixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2hELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDaEQsTUFBTSxHQUFHLEdBQUcsVUFBVSxHQUFHLFVBQVUsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxPQUFPLENBQ04sS0FBQyxJQUFJLElBQ0MsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQzNCLE9BQU8sRUFBRSxnQkFBZ0IsWUFDeEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUN4RCxDQUNQLENBQUM7QUFDSCxDQUFDIn0=