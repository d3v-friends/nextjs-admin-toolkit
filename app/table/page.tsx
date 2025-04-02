"use server";
import {Panel, TableCol, TableLink, TableList, VBase, VIp} from "@root";
import {ArrayElement, NextPageProps} from "nextjs-tools";
import React from "react";
import ClientList from "./_comp";

const list: {name: string; age: number; height: number}[] = [
	{name: "a", age: 10, height: 50},
	{name: "b", age: 20, height: 150},
	{name: "c", age: 30, height: 160},
	{name: "d", age: 40, height: 170},
	{name: "e", age: 50, height: 180},
];

const cols: TableCol<ArrayElement<typeof list>>[] = [
	{
		name: "이름",
		colClassName: "w-1/2 lg:w-1/4",
		cellClassName: "text-center",
		parser: (v) => <VBase align={"justify-center"}>{v.name}</VBase>,
	},
	{name: "나이", colClassName: "w-1/2 lg:w-1/4", cellClassName: "text-right", parser: (v) => <VIp>{v.age}</VIp>},
	{
		name: "키",
		colClassName: "w-0 lg:w-2/4",
		headerClassName: "hidden lg:table-cell",
		cellClassName: "hidden lg:table-cell",
		parser: (v, i) => <>{v.height}</>,
	},
];

export default async function ({}: NextPageProps) {
	return (
		<Panel>
			<h4>Link</h4>
			<TableLink
				className="w-full mb-10"
				list={list}
				cols={cols}
				linker={(v) => "/table"}
			/>

			<h4>Empty</h4>
			<TableLink
				className="w-full mb-10"
				list={[]}
				cols={cols}
				linker={(v) => "/table"}
			/>

			<h4>Click</h4>
			<ClientList list={list} />

			<h4 className="mt-10">List</h4>
			<TableList
				className="w-full mb-10"
				list={list}
				cols={cols}
			/>
		</Panel>
	);
}
