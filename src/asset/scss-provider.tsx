import React, {ReactNode} from "react";
import "../../asset/style/index.scss";

interface Props {
	children?: ReactNode;
}

export default function ({children}: Readonly<Props>) {
	return <>{children}</>;
}
