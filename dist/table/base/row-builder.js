import { jsx as _jsx } from "react/jsx-runtime";
export default function ({ cols, value, index }) {
    return cols.map((v, key) => (_jsx("td", { className: v.cellClassName, children: v.parser(value, index) }, key)));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGFibGUvYmFzZS9yb3ctYnVpbGRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVNBLE1BQU0sQ0FBQyxPQUFPLFdBQWMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBcUI7SUFDbkUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FDM0IsYUFFQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLGFBQWEsWUFDekIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBRmxCLEdBQUcsQ0FHSixDQUNMLENBQUMsQ0FBQztBQUNKLENBQUMifQ==