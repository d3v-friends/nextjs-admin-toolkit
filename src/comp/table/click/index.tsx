"use client";
import TableBase from "@comp/table/base";
import {TableItem} from "@comp/table/types";
import {fnCss} from "nextjs-tools";
import {MouseEventHandler} from "react";

type Props<T> = {
	items: TableItem<T>[];
	className?: string;
	list: T[];
	onClick: MouseEventHandler<HTMLDivElement>;
};

export default function <T>({items, className, list, onClick}: Readonly<Props<T>>) {
	return (
		<div className={className}>
			<TableBase.Header {...{items}} />
			{list.map((row, key) => (
				<div
					className={fnCss.concat(`flex`, "table-top-border table-content hover")}
					key={key}
					onClick={onClick}>
					{<TableBase.Row {...{row, items}} />}
				</div>
			))}
			<TableBase.Closer />
		</div>
	);
}
