"use client";
import Image from "next/image";
import {fnCss} from "nextjs-tools";
import React from "react";
import FlatRegularCross from "web-asset/svg/regular/fi-rr-cross.svg";
import Backdrop, {Props as BaseProps} from "../modal-backdrop";

type Props = {
	disableCloseButton?: boolean;
} & BaseProps;

export default function ({open, onClose, children, disableEscapeKey, disableBackdrop, disableCloseButton}: Props) {
	if (!open) return null;
	if (!children) return null;

	return (
		<Backdrop
			open={open}
			onClose={onClose}
			{...{
				disableEscapeKey,
				disableBackdrop,
			}}>
			<div className="flex flex-wrap">
				{!disableCloseButton && (
					<div className="w-full pb-2 flex justify-end">
						<Image
							className={fnCss.concat(
								"p-[0.2rem] cursor-pointer rounded-full filter-(--filter-hover-modal-close-button)"
							)}
							width={30}
							height={30}
							src={FlatRegularCross}
							alt={"close"}
							onClick={onClose}
						/>
					</div>
				)}
				<div className={fnCss.concat("w-full p-4 rounded-md shadow-2xl bg-(--color-background-modal-content)")}>
					{children}
				</div>
			</div>
		</Backdrop>
	);
}
