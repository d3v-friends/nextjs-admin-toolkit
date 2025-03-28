"use client";
import {PagerBase} from "@root";
import {useRouter} from "next/navigation";
import React from "react";

interface Props {
	page: number;
	size: number;
	total: number;
}

export default function ({page, size, total}: Readonly<Props>) {
	const router = useRouter();
	return (
		<PagerBase
			page={page}
			size={size}
			total={total}
			onClick={(e, p) => {
				const param = new URLSearchParams(window.location.search);
				param.set("page", `${p}`);
				router.push(`?${param.toString()}`);
			}}
		/>
	);
}
