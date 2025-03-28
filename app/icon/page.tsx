"use server";
import {Panel, Title} from "@root";
import Image from "next/image";
import {fnParams, NextPageProps} from "nextjs-tools";
import * as fs from "node:fs";
import React from "react";
import Pager from "./_comp/pager";

export default async function ({searchParams}: NextPageProps) {
	const {page, size} = await fnParams.parse(searchParams, {
		page: 0,
		size: 50,
	});

	const ls = fs.readdirSync("./asset/svg/flat-origin/svg");

	// const imports = ls.map(
	// 	(v) => `import Flat${toPascalCase(v.slice(6, v.length - 4))} from "../../asset/svg/flat-origin/svg/${v}";`
	// );
	//
	// const exports = ls.map((v) => `Flat${toPascalCase(v.slice(6, v.length - 4))}`);
	//
	// let e = "";
	// for (const icon of exports) {
	// 	e = `${e}, ${icon}`;
	// }
	// e = e.slice(2);

	return (
		<Panel>
			<Title>image</Title>
			<p className="mb-10">source: https://www.flaticon.com/search?weight=regular&type=uicon</p>
			<div className="grid grid-cols-5 gap-2 lg:gap-4 mb-5">
				{ls.slice(page * size, (page + 1) * size).map((v, i) => (
					<div key={i}>
						<div className="flex justify-center mb-2">
							<Image
								className="light"
								width={30}
								height={30}
								src={require(`../../asset/svg/flat-origin/svg/${v}`).default}
								alt={`${v}`}
							/>
						</div>
						<div className="w-full text-center font-(light) text-[12px] mb-4">{`Flat${toPascalCase(v.slice(6, v.length - 4))}`}</div>
					</div>
				))}
			</div>

			<Pager
				size={size}
				page={page}
				total={ls.length}
			/>

			{/*<div className="hidden">*/}
			{/*	{imports.map((v, i) => (*/}
			{/*		<div key={i}>{v}</div>*/}
			{/*	))}*/}
			{/*	export {`{${e}};`}*/}
			{/*</div>*/}
		</Panel>
	);
}

function toCamelCase(text: string) {
	return text.replace(/-\w/g, clearAndUpper);
}

function toPascalCase(text: string) {
	return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(text: string) {
	return text.replace(/-/, "").toUpperCase();
}
