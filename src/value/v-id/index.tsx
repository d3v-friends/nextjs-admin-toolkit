import React from "react";
import {FlatRegularIdBadge} from "web-asset/src/regular/flat-regular-id-badge";
import Base, {Props as BaseProps} from "../v-base";

type Props = Pick<BaseProps, "className" | "children" | "align" | "copy" | "ellipsis" | "length">;

export default function (props: Props) {
	return (
		<Base
			{...props}
			iconSrc={FlatRegularIdBadge}
		/>
	);
}
