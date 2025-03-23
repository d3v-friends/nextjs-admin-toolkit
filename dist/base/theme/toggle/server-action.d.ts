export default function (_: any, form: FormData): Promise<import("nextjs-tools").State<unknown, {
    time: number;
    value: {
        reload: boolean;
        theme: import("../fn").Theme;
    };
}>>;
