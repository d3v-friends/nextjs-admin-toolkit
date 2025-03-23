import { jsx as _jsx } from "react/jsx-runtime";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
export default async function ({ children, className }) {
    children = children || "";
    children = children.replaceAll("\n", "\r");
    return (_jsx("div", { className: className, children: _jsx(Markdown, { remarkPlugins: [remarkGfm], children: children }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGF5b3V0L21hcmtkb3duL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxRQUFRLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxTQUFTLE1BQU0sWUFBWSxDQUFDO0FBU25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBa0I7SUFDcEUsUUFBUSxHQUFHLFFBQVEsSUFBSSxFQUFFLENBQUM7SUFDMUIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLE9BQU8sQ0FDTixjQUFLLFNBQVMsRUFBRSxTQUFTLFlBQ3hCLEtBQUMsUUFBUSxJQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFHLFFBQVEsR0FBWSxHQUN0RCxDQUNOLENBQUM7QUFDSCxDQUFDIn0=