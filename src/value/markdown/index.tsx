"use server";
import React from "react";
import gfm from "remark-gfm";
import parse from "remark-parse";
import rehype from "remark-rehype";
import stringify from "rehype-stringify";
import {unified} from "unified";
import prism from "rehype-prism";

// todo 추후 테마에 따라 다른 css 불러오는 방식에 대해서 고민해보기
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-go";
import "prismjs/components/prism-typescript";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

interface Props {
	className?: string;
	children?: string;
}

export default async function ({children = "", className}: Readonly<Props>) {
	children = children.replaceAll("\n", "\r");
	const value = await unified()
		.use(parse)
		.use(gfm)
		.use(rehype)
		.use(prism, {plugins: ["line-numbers"]})
		.use(stringify)
		.process(children);
	return (
		<div
			className={className}
			dangerouslySetInnerHTML={{__html: String(value)}}
		/>
	);
}
