import {HTML, Section3} from "@root";
import {NextLayoutProps} from "nextjs-tools";
import {FlatRegularForm} from "src/asset/regular/flat-regular-form";
import {FlatRegularIconStar} from "src/asset/regular/flat-regular-icon-star";
import {FlatRegularMenuBurger} from "src/asset/regular/flat-regular-menu-burger";
import {FlatRegularMenuDots} from "src/asset/regular/flat-regular-menu-dots";
import {FlatRegularRefresh} from "src/asset/regular/flat-regular-refresh";
import {FlatRegularRocketLunch} from "src/asset/regular/flat-regular-rocket-lunch";
import {FlatRegularSubscriptionAlt} from "src/asset/regular/flat-regular-subscription-alt";
import {FlatRegularTableLayout} from "src/asset/regular/flat-regular-table-layout";
import {FlatRegularTextInputLeft} from "src/asset/regular/flat-regular-text-input-left";
import {FlatRegularWindowRestore} from "src/asset/regular/flat-regular-window-restore";
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
								title: "Icon",
								iconSrc: FlatRegularIconStar,
								href: "/icon",
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
