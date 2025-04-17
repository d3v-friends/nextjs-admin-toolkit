"use client";
import {useRouter} from "next/navigation";
import {State} from "nextjs-tools";
import {useState} from "react";

type Props = {
	state?: State<unknown, ActionStateRedirect>;
};

export type ActionStateRedirect = {
	time: number;
	href: string;
};

export default function ({state}: Props) {
	const [time, setTime] = useState(0);
	const router = useRouter();
	if (!state) return null;
	if (!state.response) return null;
	if (time === state.response.time) return null;
	setTime(state.response.time);
	router.push(state.response.href);
	return null;
}
