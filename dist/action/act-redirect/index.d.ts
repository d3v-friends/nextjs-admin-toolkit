import { State } from "nextjs-tools";
type Props = {
    state?: State<unknown, ActionStateRedirect>;
};
export type ActionStateRedirect = {
    time: number;
    href: string;
};
export default function ({ state }: Props): null;
export {};
