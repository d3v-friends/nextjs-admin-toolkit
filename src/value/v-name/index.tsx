import React from "react";
import {FlatRegularIdCardClipAlt} from "../../asset/regular/flat-regular-id-card-clip-alt";
import Base, {Props as BaseProps} from "../v-base";

type Props = Pick<BaseProps, "className" | "children" | "align" | "copy" | "ellipsis" | "length">;

export default function (props: Props) {
	return (
		<Base
			{...props}
			iconSrc={FlatRegularIdCardClipAlt}
		/>
	);
}
