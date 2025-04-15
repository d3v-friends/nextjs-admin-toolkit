import React from "react";
import FlatRegularIdBadge from "web-asset/svg/regular/fi-rr-id-badge.svg";
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
