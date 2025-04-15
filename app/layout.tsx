import {HTML, Section3} from "@root";
import {NextLayoutProps} from "nextjs-tools";
import FlatRegularCalendarDay from "web-asset/svg/regular/fi-rr-calendar-day.svg";
import FlatRegularForm from "web-asset/svg/regular/fi-rr-form.svg";
import FlatRegularInputPipe from "web-asset/svg/regular/fi-rr-input-pipe.svg";
import FlatRegularMenuBurger from "web-asset/svg/regular/fi-rr-menu-burger.svg";
import FlatRegularMenuDots from "web-asset/svg/regular/fi-rr-menu-dots.svg";
import FlatRegularRefresh from "web-asset/svg/regular/fi-rr-refresh.svg";
import FlatRegularRocketLunch from "web-asset/svg/regular/fi-rr-rocket-lunch.svg";
import FlatRegularSubscriptionAlt from "web-asset/svg/regular/fi-rr-subscription-alt.svg";
import FlatRegularTableLayout from "web-asset/svg/regular/fi-rr-table-layout.svg";
import FlatRegularTextInputLeft from "web-asset/svg/regular/fi-rr-text-input-left.svg";
import FlatRegularWindowRestore from "web-asset/svg/regular/fi-rr-window-restore.svg";

import Header from "./_comp/header";

export default async function ({children}: NextLayoutProps) {
	return (
		<HTML>
			<Section3
				top={<Header />}
				header={{
					iconSrc: FlatRegularMenuBurger,
					children: "Title",
					href: "/",
				}}
				asideMenus={[
					{
						title: "UI Components",
						collapsed: true,
						submenus: [
							{
								title: "Button",
								iconSrc: FlatRegularSubscriptionAlt,
								href: "/button",
							},
							{
								title: "Modal",
								iconSrc: FlatRegularWindowRestore,
								href: "/modal",
							},
							{
								title: "Pager",
								iconSrc: FlatRegularMenuDots,
								href: "/pager",
							},
							{
								title: "Table",
								iconSrc: FlatRegularTableLayout,
								href: "/table",
							},
							{
								title: "Value",
								iconSrc: FlatRegularTextInputLeft,
								href: "/value",
							},
							{
								title: "Animation",
								iconSrc: FlatRegularRefresh,
								href: "/animation",
							},
							{
								title: "Widget",
								iconSrc: FlatRegularCalendarDay,
								href: "/widget",
							},
							{
								title: "Input",
								iconSrc: FlatRegularInputPipe,
								href: "/input",
							},
						],
					},
					{
						title: "Server action",
						collapsed: true,
						submenus: [
							{
								title: "action",
								iconSrc: FlatRegularRocketLunch,
								href: "/action",
							},
							{
								title: "form",
								iconSrc: FlatRegularForm,
								href: "/form",
							},
						],
					},
				]}>
				{children}
			</Section3>
		</HTML>
	);
}
