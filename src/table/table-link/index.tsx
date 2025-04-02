import React, {ReactNode} from "react";
import {TableCol} from "../..";
import Base from "../base";
import Row from "./row";

interface Props<T> {
	className?: string;
	empty?: ReactNode;
	linker: (row: T) => string;
	cols: TableCol<T>[];
	list: T[];
}

const {RowBuilder, Colgroup, Thead, Table, RowEmpty} = Base;

export default function <T>({className, cols, list, linker, empty}: Props<T>) {
	return (
		<Table className={className}>
			<Colgroup cols={cols} />
			<Thead cols={cols} />
			<tbody>
				{list.map((row, key) => (
					<Row
						href={linker(row)}
						key={key}>
						<RowBuilder
							cols={cols}
							value={row}
							index={key}
						/>
					</Row>
				))}
				{list.length === 0 && <RowEmpty cols={cols}>{empty}</RowEmpty>}
			</tbody>
		</Table>
	);
}
