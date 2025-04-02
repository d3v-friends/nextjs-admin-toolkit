import React, {ReactNode} from "react";
import {TableCol} from "../..";
import Base from "../base";

interface Props<T> {
	className?: string;
	empty?: ReactNode;
	cols: TableCol<T>[];
	list: T[];
}

const {RowBuilder, Colgroup, Thead, Table, RowEmpty} = Base;

export default function <T>({className, cols, list, empty}: Props<T>) {
	return (
		<Table className={className}>
			<Colgroup cols={cols} />
			<Thead cols={cols} />
			<tbody>
				{list.map((row, key) => (
					<tr key={key}>
						<RowBuilder
							cols={cols}
							value={row}
							index={key}
						/>
					</tr>
				))}
				{list.length === 0 && <RowEmpty cols={cols}>{empty}</RowEmpty>}
			</tbody>
		</Table>
	);
}
