"use client";
import {ReactNode} from "react";
import {Button, VoidFunction} from "../..";

interface Props {
	onConfirm: VoidFunction;
	onCancel: VoidFunction;
	children: ReactNode;
	confirm?: ReactNode;
	cancel?: ReactNode;
}

export default function ({onConfirm, onCancel, children, confirm = "확인", cancel = "취소"}: Readonly<Props>) {
	return (
		<div className="grid grid-cols-2 gap-2 lg:gap-4">
			<h4 className="col-span-2">{children}</h4>
			<Button onClick={onConfirm}>{confirm}</Button>
			<Button
				buttonStyle="outlined"
				onClick={onCancel}>
				{cancel}
			</Button>
		</div>
	);
}
