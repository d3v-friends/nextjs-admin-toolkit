"use client";
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Calendar from "react-calendar";
import "../../../asset/style/react-calendar.css";
export default function ({ value, onChange }) {
    return (_jsx(_Fragment, { children: _jsx(Calendar, { locale: "ko-kr", value: value, onChange: (value) => {
                if (value instanceof Date) {
                    onChange(value);
                }
            } }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvd2lkZ2V0L2NhbGVuZGFyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBTyxRQUFRLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyx5Q0FBeUMsQ0FBQztBQU9qRCxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBa0I7SUFDMUQsT0FBTyxDQUNOLDRCQUNDLEtBQUMsUUFBUSxJQUNSLE1BQU0sRUFBRSxPQUFPLEVBQ2YsS0FBSyxFQUFFLEtBQUssRUFDWixRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDbkIsSUFBSSxLQUFLLFlBQVksSUFBSSxFQUFFLENBQUM7b0JBQzNCLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakIsQ0FBQztZQUNGLENBQUMsR0FDQSxHQUNBLENBQ0gsQ0FBQztBQUNILENBQUMifQ==