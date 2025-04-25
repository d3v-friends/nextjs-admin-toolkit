"use client";
import {Nullable} from "nextjs-tools";
import React, {ReactNode, useState} from "react";
import {ActLoading, ModalBase} from "../..";

interface Props {
	action: (payload: FormData) => void;
	pending: boolean;
	className?: string;
	children?: (onOpen: () => void, onClose: () => void) => ReactNode;
	loadingChildren?: ReactNode;
	ask: (onConfirm: () => void, onCancel: () => void) => ReactNode;
	disableBackdrop?: boolean;
	disableEscapeKey?: boolean;
	disableCloseButton?: boolean;
	disableLoadingView?: boolean;
}

export default function ({
	className,
	children,
	loadingChildren,
	pending,
	action,
	ask,
	disableEscapeKey = true,
	disableBackdrop = true,
	disableCloseButton = true,
	disableLoadingView,
}: Readonly<Props>) {
	const [form, setForm] = useState<Nullable<HTMLFormElement>>();
	const [open, setOpen] = useState(false);

	if (!children) return null;

	const onConfirm = () => {
		form?.requestSubmit();
		setOpen(false);
	};

	const onCancel = () => {
		setOpen(false);
	};

	const onOpen = () => {
		if (form?.reportValidity()) setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	return (
		<>
			<form
				ref={setForm}
				className={className}
				action={action}>
				{children(onOpen, onClose)}
			</form>

			{form && (
				<ModalBase
					disableCloseButton={disableCloseButton}
					disableEscapeKey={disableEscapeKey}
					disableBackdrop={disableBackdrop}
					open={open}
					onClose={() => setOpen(false)}>
					{ask(onConfirm, onCancel)}
				</ModalBase>
			)}

			{!disableLoadingView && <ActLoading pending={pending}>{loadingChildren}</ActLoading>}
		</>
	);
}
