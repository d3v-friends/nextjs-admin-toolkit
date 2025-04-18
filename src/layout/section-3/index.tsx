import {fnCss} from "nextjs-tools";
import {ReactNode} from "react";
import Widget, {Props as WidgetProps} from "./widget";

interface Props extends WidgetProps {
	children?: ReactNode;
}

export default function ({children, header, asideMenus, top}: Readonly<Props>) {
	return (
		<div className={"flex flex-col h-full min-h-screen relative"}>
			<Widget {...{header, asideMenus, top}} />
			<main className={fnCss.sum("flex-1 lg:ml-(--width-aside) transition-all duration-300")}>
				<div className="p-3 lg:p-5">{children}</div>
			</main>
		</div>
	);
}
