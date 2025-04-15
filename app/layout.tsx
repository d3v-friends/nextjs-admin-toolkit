import {HTML, Section3} from "@root";
import {NextLayoutProps} from "nextjs-tools";
import {FlatRegularCalendarDay} from "web-asset/src/regular/flat-regular-calendar-day";
import {FlatRegularForm} from "web-asset/src/regular/flat-regular-form";
import {FlatRegularInputPipe} from "web-asset/src/regular/flat-regular-input-pipe";
import {FlatRegularMenuBurger} from "web-asset/src/regular/flat-regular-menu-burger";
import {FlatRegularMenuDots} from "web-asset/src/regular/flat-regular-menu-dots";
import {FlatRegularRefresh} from "web-asset/src/regular/flat-regular-refresh";
import {FlatRegularRocketLunch} from "web-asset/src/regular/flat-regular-rocket-lunch";
import {FlatRegularSubscriptionAlt} from "web-asset/src/regular/flat-regular-subscription-alt";
import {FlatRegularTableLayout} from "web-asset/src/regular/flat-regular-table-layout";
import {FlatRegularTextInputLeft} from "web-asset/src/regular/flat-regular-text-input-left";
import {FlatRegularWindowRestore} from "web-asset/src/regular/flat-regular-window-restore";

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
